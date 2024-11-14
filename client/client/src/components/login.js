import React from "react";
import { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import "../index.css";
import axios from "axios";

export default function Login() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const login = async (event) => {
        event.preventDefault();

        try {
            const res = await axios.post("http://localhost:4000/login", { username, password });

            if (res.data.success === true) {
                alert(res.data.message);
            } else {
                alert(res.data.message);
            }
        } catch (error) {
            alert(error.response?.data?.message);
        }
    }

    return (
        <>
            <div className="login-container">
                <h2>Login</h2>

                <Form className="login-form" onSubmit={login}>
                    {/* username */}
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            onChange={(e) => setUsername(e.target.value)}
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
                    {/* submit button */}
                    <Button className="login-button" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}