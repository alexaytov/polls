package com.polls.pollsapi.data;

import dto.Answer;
import dto.Poll;
import dto.Question;

import java.util.List;
import java.util.stream.Collectors;

public class DomainModelMapper {

    private DomainModelMapper() {

    }

    public static com.polls.pollsapi.data.model.Poll toDomainModel(Poll poll) {
        List<com.polls.pollsapi.data.model.Question> questions = poll.getQuestions().stream()
                .map(DomainModelMapper::toDomainModel)
                .collect(Collectors.toList());

        return new com.polls.pollsapi.data.model.Poll(poll.getName(), questions);
    }

    public static com.polls.pollsapi.data.model.Question toDomainModel(Question question) {
        List<com.polls.pollsapi.data.model.Answer> answers = question.getAnswers().stream()
                .map(DomainModelMapper::toDomainModel)
                .collect(Collectors.toList());

        return new com.polls.pollsapi.data.model.Question(question.getQuestion(), answers);
    }

    public static com.polls.pollsapi.data.model.Answer toDomainModel(Answer answer) {
        return new com.polls.pollsapi.data.model.Answer(answer.getText());
    }

    public static Poll toDto(com.polls.pollsapi.data.model.Poll poll) {
        List<Question> questions = poll.getQuestions().stream().map(DomainModelMapper::toDto).collect(Collectors.toList());

        return new Poll()
                .id(poll.getId())
                .name(poll.getName())
                .questions(questions);
    }

    public static Question toDto(com.polls.pollsapi.data.model.Question question) {
        List<Answer> answers = question.getAnswers().stream().map(DomainModelMapper::toDto).collect(Collectors.toList());

        return new Question()
                .id(question.getId())
                .question(question.getQuestion())
                .answers(answers);
    }

    public static Answer toDto(com.polls.pollsapi.data.model.Answer answer) {
        return new Answer()
                .id(answer.getId())
                .text(answer.getText());
    }

}