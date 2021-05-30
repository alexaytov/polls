package com.polls.pollsapi.controllers;

import com.polls.pollsapi.services.IPollService;
import controller.PollApi;
import dto.Poll;
import dto.PollResult;
import dto.PollSubmission;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

import static org.springframework.http.ResponseEntity.created;
import static org.springframework.http.ResponseEntity.ok;

@CrossOrigin
@RestController
public class PollController implements PollApi {

    private static final String CREATED_URL_TEMPLATE = "/%s";

    private final IPollService pollService;

    public PollController(IPollService pollService) {
        this.pollService = pollService;
    }

    @Override
    public ResponseEntity<Poll> createPoll(Poll poll) {
        URI uri = URI.create(String.format(CREATED_URL_TEMPLATE, poll.getId()));
        return created(uri).body(pollService.createPoll(poll));
    }

    @Override
    public ResponseEntity<Void> createPollSubmission(String pollID, PollSubmission pollSubmission) {
        URI uri = URI.create(String.format(CREATED_URL_TEMPLATE, pollID));
        return created(uri).build();
    }

    @Override
    public ResponseEntity<Poll> getPollById(String pollID) {
        return ok(pollService.getPoll(pollID));
    }

    @Override
    public ResponseEntity<PollResult> getPollResultById(String pollID) {
        return ok(pollService.getPollResult(pollID));
    }
}
