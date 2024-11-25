package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GenerationType;
import java.time.LocalDateTime;

@Entity
@Table(name = "user")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String username;
    private String password;
    private String email;
    private LocalDateTime birthday;
    private int userType;

    public UserEntity() {
    }

    public UserEntity(Long userId, String username, String password, String email, LocalDateTime birthday,
            int userType) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.email = email;
        this.birthday = birthday;
        this.userType = userType;
    }

    public Long getUid() {
        return this.userId;
    }

    public String getUsername() {
        return this.username;
    }

    public String getPassword() {
        return this.password;
    }

    public String getEmail() {
        return this.email;
    }

    public LocalDateTime getBirthday() {
        return this.birthday;
    }

    public int getUserType() {
        return this.userType;
    }

    public void setUid(Long userId) {
        this.userId = userId;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setBirthday(Long userId) {
        this.userId = userId;
    }

    public void setUserType(int userType) {
        this.userType = userType;
    }

}
