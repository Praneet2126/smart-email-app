package com.ooad.smartEmailApplication.service;

import com.ooad.smartEmailApplication.model.Email;
import com.ooad.smartEmailApplication.model.Inbox;
import com.ooad.smartEmailApplication.model.User;
import com.ooad.smartEmailApplication.repository.EmailRepository;
import com.ooad.smartEmailApplication.repository.InboxRepository;
import com.ooad.smartEmailApplication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private InboxRepository inboxRepository;
    
    @Autowired
    private EmailRepository emailRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    public User signup(User user) {
        // Create new inbox for user
        Inbox inbox = new Inbox();
        inbox = inboxRepository.save(inbox);
        
        // Encrypt password
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setInbox(inbox);
        
        return userRepository.save(user);
    }
    
    public Optional<User> login(String email, String password) {
        Optional<User> userOpt = userRepository.findByEmail(email);
        
        if (userOpt.isPresent() && passwordEncoder.matches(password, userOpt.get().getPassword())) {
            return userOpt;
        }
        
        return Optional.empty();
    }
    
    public Email fetchEmail(String emailId, String userEmail) {
        User user = userRepository.findByEmail(userEmail)
            .orElseThrow(() -> new RuntimeException("User not found"));
            
        return user.getEmails().stream()
            .filter(email -> email.getId().equals(emailId))
            .findFirst()
            .orElseThrow(() -> new RuntimeException("Email not found"));
    }
}