package com.polls.pollsapi.services;

import com.polls.pollsapi.data.repositories.PollRepository;
import com.polls.pollsapi.exceptions.PollNotFoundException;
import dto.Poll;

import static com.polls.pollsapi.data.DomainModelMapper.toDomainModel;
import static com.polls.pollsapi.data.DomainModelMapper.toDto;

public class PollService implements IPollService {

    private final PollRepository pollRepository;

    public PollService(PollRepository pollRepository) {
        this.pollRepository = pollRepository;
    }


    @Override
    public Poll createPoll(Poll poll) {
        return toDto(pollRepository.save(toDomainModel(poll)));
    }

    @Override
    public Poll getPoll(String id) {
        var poll = pollRepository.findById(id)
                .orElseThrow(() -> new PollNotFoundException(String.format("Poll with id %s not found", id)));

        return toDto(poll);
    }
}
