import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

export default function Login() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const login = async (event) => {
        event.preventDefault();
        setErrorMessage("");

        try {
            const res = await axios.post("http://localhost:4000/login", { username, password });

            if (res.data.success) {
                localStorage.setItem('username', username);
                localStorage.setItem('type', res.data.type);

                alert(res.data.message);
                navigate("/home");
            } else {
                setErrorMessage(res.data.message);
            }
        } catch (error) {
            // Display fallback error message
            setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");
        }
    };

    return (
        <body style={{backgroundColor:"#3044FB", width:"100vw"}}>
            <div className="background-image">
                <Container>
                    <img className="logo-login" src="/Eslsca-Logo.png" alt='ESLSCA Logo' />

                    <div className="login-container">
                        <div className="title">
                            <h2 className="login-container-h2">Login</h2>
                        </div>

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

                                {/* Register Button */}
                                <NavLink to="/register">
                                    <Button
                                        className="signup-button"
                                        type="button"
                                    >
                                        Register
                                    </Button>
                                </NavLink>
                            </div>

                            {/* Forgot password */}
                            {
                                <div className="forgot-pass">
                                    <p>Forgot your password? <NavLink to="/reset" className={"reset-click"}>Reset password</NavLink></p>
                                </div>
                            }
                        </Form>
                    </div>
                </Container>
            </div>
        </body>
    );
}
