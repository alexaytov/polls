package com.polls.pollsapi.services;

import dto.Poll;
import dto.PollResult;
import dto.PollSubmission;

public interface IPollService {

    Poll createPoll(Poll poll);

    Poll getPoll(String id);

    PollResult getPollResult(String id);

    void submitPoll(String pollId, PollSubmission pollSubmission);

}
