package com.polls.pollsapi.data.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.concurrent.atomic.AtomicLong;

@Entity
@Table(name = "answers")
public class Answer extends BaseEntity {

    private String text;
    private AtomicLong answers;

    public Answer(String text) {
        this.text = text;
        answers = new AtomicLong(0);
    }

    protected Answer() {

    }

    public String getText() {
        return text;
    }

    public AtomicLong getAnswers() {
        return answers;
    }
}
