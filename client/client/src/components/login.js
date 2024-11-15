import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "../index.css";

export default function Login({ toggleView }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // State for error message

    // Function to handle login
    const login = async (event) => {
        event.preventDefault();
        setErrorMessage(""); // Reset error message on each login attempt

        try {
            const res = await axios.post("http://localhost:4000/login", { username, password });

            if (res.data.success) {
                alert(res.data.message); // Success message (optional)
            } else {
                setErrorMessage("Wrong password or username."); // Set error message if login fails
            }
        } catch (error) {
            // Display fallback error message
            setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");
        }
    };

    return (
        <>
            <div className="title">
                <h2 className="login-container-h2">Login</h2>
            </div>
            <div className="login-container">
                <Form className="login-form" onSubmit={login}>
                    
                    {/* Username Field */}
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </Form.Group>

                    {/* Password Field */}
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    {/* Error Message */}
                    {errorMessage && (
                        <div className="error-message">
                            {errorMessage}
                        </div>
                    )}

                    {/* Login Button */}
                    <Button className="login-button" type="submit">
                        Login
                    </Button>

                    {/* Signup Button */}
                    <Button
                        className="signup-button"
                        type="button"
                        onClick={toggleView}
                    >
                        Signup
                    </Button>
                </Form>
            </div>
        </>
    );
}
