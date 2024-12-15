import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

export default function ForgetPassword() {
    const [username, setUsername] = useState(null);
    const [newPassword, setNewPassword] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const forgetPassword = async (event) => {
        event.preventDefault();
        setErrorMessage("");

        try {
            const res = await axios.post("http://localhost:4000/forgetPassword", { username, password, newPassword });

            if (res.data.success) {
                localStorage.setItem('username', username);
                localStorage.setItem('type', res.data.type);

                alert(res.data.message);
                navigate("/home");
            } else {
                setErrorMessage(res.data.message);
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");
        }
    };

    return (
        <div>
            <Container>
                <div className="title">
                    <h2 className="login-container-h2">Reset Password</h2>
                </div>

                <div className="login-container" >
                    <Form className="login-form" onSubmit={forgetPassword}>

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
                            <Form.Label>Old Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        {/* New Password Field */}
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
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
                            {/* ForgetPassword Button */}
                            <Button className="login-button" id="reset-password-button" type="submit">
                                Reset Password
                            </Button>
                        </div>

                        {/* Login */}
                        {
                            <div className="forgot-pass">
                                <p>Return back to <NavLink to="/login" className={"reset-click"}>Login</NavLink></p>
                            </div>
                        }
                    </Form>
                </div>

            </Container>
        </div>
    );
}
