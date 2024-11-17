import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

export default function Login() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const login = async (event) => {
        event.preventDefault();
        setErrorMessage("");

        try {
            const res = await axios.post("http://localhost:4000/login", { username, password });

            if (res.data.success) {
                alert(res.data.message);
            } else {
                setErrorMessage(res.data.message);
            }
        } catch (error) {
            // Display fallback error message
            setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");
        }
    };

    return (
        <div>
            <Container>
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
                                <p>{errorMessage}</p>
                            </div>
                        )}

                        <div className="login-button-container">
                            {/* Login Button */}
                            <Button className="login-button" type="submit">
                                Login
                            </Button>

                            {/* Signup Button */}
                            <Button
                                className="signup-button"
                                type="button"
                                onClick={() => window.location.href = "/register"}
                            >
                                Signup
                            </Button>
                        </div>

                        {/* Forgot password */}
                        {
                            <div className="forgot-pass">
                                <p>Forgot your password? <a className="reset-click" href="/reset">Reset password</a></p>
                            </div>
                        }
                    </Form>
                </div>
            </Container>
        </div>
    );
}
