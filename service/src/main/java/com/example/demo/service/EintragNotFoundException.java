package com.example.demo.service;

public class EintragNotFoundException extends RuntimeException{
    public EintragNotFoundException(String message) {
        super(message);
    }
}
