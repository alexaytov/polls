package com.polls.pollsapi.controllers;

import com.polls.pollsapi.services.PollService;
import controller.PollApi;
import dto.Poll;
import dto.PollResult;
import dto.PollSubmission;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.ResponseEntity.ok;

@CrossOrigin
@RestController
public class PollController implements PollApi {

    private final PollService pollService;

    public PollController(PollService pollService) {
        this.pollService = pollService;
    }

    @Override
    public ResponseEntity<Poll> createPoll(Poll poll) {
        return ok(pollService.createPoll(poll));
    }

    @Override
    public ResponseEntity<Void> createPollSubmission(String pollID, PollSubmission pollSubmission) {
        return null;
    }

    @Override
    public ResponseEntity<Poll> getPollById(String pollID) {
        return null;
    }

    @Override
    public ResponseEntity<PollResult> getPollResultById(String pollID) {
        return null;
    }
}
