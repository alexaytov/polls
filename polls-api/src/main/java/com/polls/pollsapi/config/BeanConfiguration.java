package com.polls.pollsapi.config;

import com.polls.pollsapi.data.repositories.AnswerRepository;
import com.polls.pollsapi.data.repositories.PollRepository;
import com.polls.pollsapi.services.IPollService;
import com.polls.pollsapi.services.PollService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfiguration {

    @Bean
    public IPollService pollService(PollRepository pollRepository, AnswerRepository answerRepository) {
        return new PollService(pollRepository, answerRepository);
    }

}
