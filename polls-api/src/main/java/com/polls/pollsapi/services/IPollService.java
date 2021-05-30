package com.polls.pollsapi.services;

import dto.Poll;

public interface IPollService {

    Poll createPoll(Poll poll);

    Poll getPoll(String id);

}
