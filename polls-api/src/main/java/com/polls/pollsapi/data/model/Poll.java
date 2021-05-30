package com.polls.pollsapi.data.model;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "poll")
public class Poll extends BaseEntity {

    private String name;
    @ElementCollection
    private List<Question> questions;

    public Poll(String name, List<Question> questions) {
        this.name = name;
        this.questions = questions;
    }

    protected Poll() {

    }

    public String getName() {
        return name;
    }

    public List<Question> getQuestions() {
        return questions;
    }
}
