package com.ooad.smartEmailApplication.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
@Document(collection = "users")
public class User extends Person{
    private String password;

    @DBRef
    private Inbox inbox;
    
    @DBRef
    private List<Email> emails = new ArrayList<>();
}
