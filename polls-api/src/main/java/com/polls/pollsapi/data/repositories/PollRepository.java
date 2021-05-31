package com.polls.pollsapi.data.repositories;

import com.polls.pollsapi.data.model.Poll;
import org.springframework.data.repository.CrudRepository;

public interface PollRepository extends CrudRepository<Poll, String> {
}
