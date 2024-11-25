package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.Entity.UserEntity;
import com.example.demo.Service.UserService;

import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/getAllUser")
    @ResponseBody
    public List<UserEntity> getAllUser() {
        return userService.getAllUsers();
    }

    @PostMapping("/registerUser")
    public String RegisterUser(@RequestBody UserEntity user) {
        userService.RegisterUser(user);
        return "User " + user.getUsername() + " successfully registered!";
    }

}
