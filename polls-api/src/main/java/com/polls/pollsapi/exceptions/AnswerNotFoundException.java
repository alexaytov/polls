package com.polls.pollsapi.exceptions;

public class AnswerNotFoundException extends RuntimeException {

    public AnswerNotFoundException(String message) {
        super(message);
    }
}
