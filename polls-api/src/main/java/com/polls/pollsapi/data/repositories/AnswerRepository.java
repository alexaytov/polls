package com.polls.pollsapi.data.repositories;

import com.polls.pollsapi.data.model.Answer;
import org.springframework.data.repository.CrudRepository;

public interface AnswerRepository extends CrudRepository<Answer, String> {
}
