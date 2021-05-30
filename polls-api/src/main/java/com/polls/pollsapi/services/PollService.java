package com.polls.pollsapi.services;

import com.polls.pollsapi.data.model.Answer;
import com.polls.pollsapi.data.model.Question;
import com.polls.pollsapi.data.repositories.AnswerRepository;
import com.polls.pollsapi.data.repositories.PollRepository;
import com.polls.pollsapi.exceptions.AnswerNotFoundException;
import com.polls.pollsapi.exceptions.IncompletePollSubmissionException;
import com.polls.pollsapi.exceptions.PollNotFoundException;
import com.polls.pollsapi.exceptions.QuestionNotFoundException;
import dto.Poll;
import dto.PollResult;
import dto.PollSubmission;

import static com.polls.pollsapi.data.DomainModelMapper.*;

public class PollService implements IPollService {

    private final PollRepository pollRepository;
    private final AnswerRepository answerRepository;

    public PollService(PollRepository pollRepository, AnswerRepository answerRepository) {
        this.pollRepository = pollRepository;
        this.answerRepository = answerRepository;
    }


    @Override
    public Poll createPoll(Poll poll) {
        return toDto(pollRepository.save(toDomainModel(poll)));
    }

    @Override
    public Poll getPoll(String id) {
        return toDto(getRequiredPoll(id));
    }

    @Override
    public PollResult getPollResult(String id) {
        return toDtoResult(getRequiredPoll(id));
    }

    @Override
    public void submitPoll(String pollId, PollSubmission pollSubmission) {
        var poll = getRequiredPoll(pollId);

        if (poll.getQuestions().size() != pollSubmission.getAnswers().size()) {
            throw new IncompletePollSubmissionException("Not all questions are answered");
        }

        pollSubmission.getAnswers().forEach(q -> increaseAnswer(poll, q.getQuestion(), q.getAnswer()));
    }

    private void increaseAnswer(com.polls.pollsapi.data.model.Poll poll, String questionId, String answerId) {
        Question question = poll.getQuestions().stream()
                .filter(q -> q.getId().equals(questionId))
                .findFirst()
                .orElseThrow(() -> new QuestionNotFoundException(String.format("Question with id %s does not exist", questionId)));

        Answer answer = question.getAnswers().stream()
                .filter(a -> a.getId().equals(answerId))
                .findFirst()
                .orElseThrow(() -> new AnswerNotFoundException(String.format("Answer with id %s does not exist", answerId)));

        answer.getAnswers().incrementAndGet();
        answerRepository.save(answer);
    }

    private com.polls.pollsapi.data.model.Poll getRequiredPoll(String id) {
        return pollRepository.findById(id)
                .orElseThrow(() -> new PollNotFoundException(String.format("Poll with id %s does not exist", id)));
    }
}
