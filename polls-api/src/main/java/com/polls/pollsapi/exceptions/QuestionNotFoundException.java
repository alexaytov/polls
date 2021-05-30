package com.polls.pollsapi.exceptions;

public class QuestionNotFoundException extends RuntimeException {

    public QuestionNotFoundException(String message) {
        super(message);
    }
}
