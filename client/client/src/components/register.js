import React from "react";
import { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default function Register({ toggleView }) {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [type, setType] = useState("student");
    const [errorMessage, setErrorMessage] = useState("");

    const register = async (event) => {
        event.preventDefault();
        setErrorMessage(""); // Reset error message
    
        // Field validation
        if (!username || !email || !password) {
            setErrorMessage("All fields are required.");
            return;
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }
    
        try {
            const res = await axios.post("http://localhost:4000/register", {
                username,
                password,
                email,
                type,
            });
    
            if (res.data.success) {
                alert("Registration successful!"); // Feedback to the user
                setUsername("");
                setPassword("");
                setEmail("");
                setType("student");
            } else {
                setErrorMessage(res.data.message);
            }
        } catch (error) {
            setErrorMessage(
                error.response?.data?.message || "Something went wrong. Please try again later."
            );
        }
    };

    return (
        <>
            <div className="title"><h2 className="login-container-h2">Register</h2></div>

            <div className="signup-container ">
                <Form className="signup-form" onSubmit={register}>
                    {/* username */}
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>

                    {/* email */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    
                    {/* password */}
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    {/* type */}
                    <Form.Group controlId="formBasicType">
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                            as="select"
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="student">Student</option>
                            <option value="admin">Admin</option>
                        </Form.Control>
                    </Form.Group>
                    {/* Error Message */}
                    {errorMessage && (
                        <div className="error-message">
                            <p>{errorMessage}</p>
                        </div>
                    )}

                    {/* signup button */}
                    <Button className="signup-button-signup" type="submit">
                        Signup
                    </Button>

                    <div className="old-user">
                        <p>Already have <br></br>an account?</p>
                        {/* submit button */}
                        <Button className="login-button-signup" type="button" onClick={toggleView}>
                            Login
                        </Button>

                    </div>
                </Form>
            </div>
        </>
    )
}