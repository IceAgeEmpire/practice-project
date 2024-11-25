import { useState } from "react";
import '../styles/App.css'
import '../styles/form.css'
import axios from "axios";
import apiClient from "../api/axios";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "registerUser"

export default function RegisterUser(){

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    
    const handleRegister = async (e) => {
        e.preventDefault();
    
        // if (!USER_REGEX.test(username)) {
        //     alert("Invalid username format");
        //     return;
        // }
        // if (!PWD_REGEX.test(password)) {
        //     alert("Invalid password format");
        //     return;
        // }
        if (username==="") {
            alert("Invalid username format");
            return;
        }
        if (password==="") {
            alert("Invalid password format");
            return;
        }
    
        try {
            const response = await apiClient.post(
                REGISTER_URL,
                { username, password },       // The data being sent
                { headers: { "Content-Type": "application/json" } } // Optional headers
            );
    
            if (response.status === 200) {
                alert("Register successful!");
                console.log("Response data:", response.data);
                // Redirect user or store authentication token (if applicable)
            }
        } catch (error) {
            console.error("Error during registration:", error);
            if (error.response && error.response.status === 401) {
                alert("Invalid credentials. Please try again.");
            } else {
                alert("Something went wrong. Please try later.");
            }
        }
    }
    
    return(
        <form onSubmit={handleRegister}>
            <label htmlFor="username">Username: </label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password: </label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
        </form>
    );
}

