package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.UserEntity;
import com.example.demo.Repository.UserRepository;
import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public void RegisterUser(UserEntity user) {
        userRepository.save(user);
    }

    public List<UserEntity> getAllUsers() {
        return userRepository.findAll(); // `findAll` returns a list of users
    }

}
