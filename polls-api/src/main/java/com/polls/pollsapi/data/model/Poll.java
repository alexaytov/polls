package com.polls.pollsapi.data.model;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

import static javax.persistence.CascadeType.PERSIST;

@Entity
@Table(name = "poll")
public class Poll extends BaseEntity {

    private String name;
    @OneToMany(cascade = PERSIST)
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
