package com.ooad.smartEmailApplication.service;

import com.ooad.smartEmailApplication.model.Email;
import com.ooad.smartEmailApplication.model.Inbox;
import com.ooad.smartEmailApplication.model.User;
import com.ooad.smartEmailApplication.repository.EmailRepository;
import com.ooad.smartEmailApplication.repository.InboxRepository;
import com.ooad.smartEmailApplication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class EmailService {
    @Autowired
    private EmailRepository emailRepository;
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private InboxRepository inboxRepository;
    
    public Email sendEmail(String from, String to, Email email) {
        User sender = userRepository.findByEmail(from)
            .orElseThrow(() -> new RuntimeException("Sender not found"));
            
        User recipient = userRepository.findByEmail(to)
            .orElseThrow(() -> new RuntimeException("Recipient not found"));
            
        // Set timestamp
        email.setTimestamp(LocalDateTime.now());
        
        // Save email
        Email savedEmail = emailRepository.save(email);
        
        // Update sender's sent emails
        sender.getEmails().add(savedEmail);
        userRepository.save(sender);
        
        // Update recipient's inbox
        recipient.getInbox().getEmails().add(savedEmail);
        inboxRepository.save(recipient.getInbox()); 
        
        return savedEmail;
    }
    
    
    public void starEmail(String emailId, String userEmail) {
        User user = userRepository.findByEmail(userEmail)
            .orElseThrow(() -> new RuntimeException("User not found"));
    
        // We fetch the email directly
        Email email = emailRepository.findById(emailId)
            .orElseThrow(() -> new RuntimeException("Email not found"));
    
        // Security Check: Ensure the email exists in user's inbox
        boolean isInInbox = user.getInbox().getEmails().stream()
            .anyMatch(e -> e.getId().equals(emailId));
    
        if (!isInInbox) {
            throw new RuntimeException("Access denied: Email not found in user's inbox.");
        }
    
        // Star it
        email.setStarred(true);
        emailRepository.save(email);
    }
    
    
    
    public void deleteEmail(String emailId, String userEmail) {
        User user = userRepository.findByEmail(userEmail)
            .orElseThrow(() -> new RuntimeException("User not found"));
    
        Inbox inbox = user.getInbox();
    
        boolean wasInInbox = inbox.getEmails().removeIf(email -> email.getId().equals(emailId));
        boolean wasInSent = user.getEmails().removeIf(email -> email.getId().equals(emailId));
    
        if (!wasInInbox && !wasInSent) {
            throw new RuntimeException("Access denied: Email not found in user's inbox or sent emails.");
        }
    
        // Save updated references
        inboxRepository.save(inbox);
        userRepository.save(user);
    
        // Delete the email document
        emailRepository.deleteById(emailId);
    }
    

    
    public List<Email> filterEmailsByContent(String criteria, String userEmail) {
        User user = userRepository.findByEmail(userEmail)
            .orElseThrow(() -> new RuntimeException("User not found"));
            
        return user.getInbox().filterEmails(criteria);
    }
}
