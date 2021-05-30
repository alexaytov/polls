package com.polls.pollsapi.config;

import com.polls.pollsapi.data.repositories.PollRepository;
import com.polls.pollsapi.services.PollService;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfiguration {

    public PollService pollService(PollRepository pollRepository) {
        return new PollService(pollRepository);
    }

}
