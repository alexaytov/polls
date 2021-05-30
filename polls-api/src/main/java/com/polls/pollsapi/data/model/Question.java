package com.polls.pollsapi.data.model;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

import static javax.persistence.CascadeType.PERSIST;

@Entity
@Table(name = "question")
public class Question extends BaseEntity {

    private String question;
    @OneToMany(cascade = PERSIST)
    private List<Answer> answers;

    public Question(String question, List<Answer> answers) {
        this.question = question;
        this.answers = answers;
    }

    protected Question() {

    }

    public String getQuestion() {
        return question;
    }

    public List<Answer> getAnswers() {
        return answers;
    }
}
