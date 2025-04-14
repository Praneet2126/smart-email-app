package com.ooad.smartEmailApplication.ai;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.ooad.smartEmailApplication.model.Email;

@Component
public class SummarizeStrategy implements EmailActionStrategy {
    private final RestTemplate restTemplate = new RestTemplate();
    private final String aiServiceUrl = "http://your-ai-service-url/summarize";
    
    @Override
    public String execute(Email email) {
        // Make API call to your Python AI service
        return restTemplate.postForObject(aiServiceUrl, email, String.class);
    }
}
