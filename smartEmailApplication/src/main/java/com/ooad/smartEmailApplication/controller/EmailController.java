package com.ooad.smartEmailApplication.controller;

import com.ooad.smartEmailApplication.exception.AccessDeniedException;
import com.ooad.smartEmailApplication.model.Email;
import com.ooad.smartEmailApplication.service.AIRecommendationService;
import com.ooad.smartEmailApplication.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/emails")
@CrossOrigin(origins = "*")
public class EmailController {
    @Autowired
    private EmailService emailService;
    
    @Autowired
    private AIRecommendationService aiRecommendationService;
    
    @PostMapping("/send")
    public ResponseEntity<?> sendEmail(
            @RequestParam String from,
            @RequestParam String to,
            @RequestBody Email email) {
        try {
            Email sentEmail = emailService.sendEmail(from, to, email);
            return ResponseEntity.ok(sentEmail);
        } catch (Exception e) {
            Map<String, String> error = new HashMap<>();
            error.put("error", e.getMessage());
            return ResponseEntity.badRequest().body(error);
        }
    }
    
    @PutMapping("/{emailId}/star")
    public ResponseEntity<?> starEmail(
            @PathVariable String emailId,
            @RequestParam String userEmail) {
        try {
            emailService.starEmail(emailId, userEmail);
            Map<String, String> response = new HashMap<>();
            response.put("message", "Email starred successfully.");
            return ResponseEntity.ok(response);
        } catch (AccessDeniedException e) {
            Map<String, String> error = new HashMap<>();
            error.put("error", e.getMessage());
            return ResponseEntity.status(403).body(error); // 403 Forbidden
        } catch (Exception e) {
            Map<String, String> error = new HashMap<>();
            error.put("error", e.getMessage());
            return ResponseEntity.status(500).body(error); // 500 Internal Server Error
        }
    }
    
    @DeleteMapping("/{emailId}")
    public ResponseEntity<?> deleteEmail(
            @PathVariable String emailId,
            @RequestParam String userEmail) {
        try {
            emailService.deleteEmail(emailId, userEmail);
            Map<String, String> response = new HashMap<>();
            response.put("message", "Email deleted successfully.");
            return ResponseEntity.ok(response);
        } catch (AccessDeniedException e) {
            Map<String, String> error = new HashMap<>();
            error.put("error", e.getMessage());
            return ResponseEntity.status(403).body(error); // 403 Forbidden
        } catch (Exception e) {
            Map<String, String> error = new HashMap<>();
            error.put("error", e.getMessage());
            return ResponseEntity.status(500).body(error); // 500 Internal Server Error
        }
    }
    
    @GetMapping("/filter")
    public ResponseEntity<?> filterEmails(
            @RequestParam String criteria,
            @RequestParam String userEmail) {
        try {
            List<Email> filteredEmails = emailService.filterEmailsByContent(criteria, userEmail);
            return ResponseEntity.ok(filteredEmails);
        } catch (Exception e) {
            Map<String, String> error = new HashMap<>();
            error.put("error", e.getMessage());
            return ResponseEntity.badRequest().body(error);
        }
    }
    
    @PostMapping("/analyze")
    public ResponseEntity<?> analyzeEmail(
            @RequestBody Email email,
            @RequestParam String type) {
        try {
            String result = aiRecommendationService.analyzeEmail(email, type);
            Map<String, String> response = new HashMap<>();
            response.put("result", result);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, String> error = new HashMap<>();
            error.put("error", e.getMessage());
            return ResponseEntity.badRequest().body(error);
        }
    }
}