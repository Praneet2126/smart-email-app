package com.ooad.smartEmailApplication.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/public")
public class PublicController {
    
    @GetMapping("/health-check")
    public String healthCheck() {
        return "OK";
    }
    
}
