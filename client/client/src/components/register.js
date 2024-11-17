import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

export default function Register() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [type, setType] = useState("student");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const register = async (event) => {
        event.preventDefault();
        setErrorMessage("");

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
                alert(res.data.message);
                navigate("/home");
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
        <div>
            <Container>
                <div className="title">
                    <h2 className="login-container-h2">Register</h2>
                </div>

                <div className="signup-container">
                    <Form className="signup-form" onSubmit={register}>
                        {/* username */}
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </Form.Group>

                        {/* email */}
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        {/* password */}
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
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

                        {/* Login */}
                        {
                            <div className="forgot-pass">
                                <p>Already have an account? <NavLink to="/login" className={"reset-click"}>Login</NavLink></p>
                            </div>
                        }

                    </Form>
                </div>
            </Container>
        </div>
    )
}