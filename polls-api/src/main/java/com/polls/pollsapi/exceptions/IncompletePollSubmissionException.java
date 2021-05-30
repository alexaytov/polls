package com.polls.pollsapi.exceptions;

public class IncompletePollSubmissionException extends RuntimeException {

    public IncompletePollSubmissionException(String message) {
        super(message);
    }
}
