import React from "react";
import { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import "../index.css";
import axios from "axios";

export default function Login({ toggleView }) {
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
            <div className="title"><h2 className="login-container-h2">Login</h2></div>
            <div className="login-container">
                <Form className="login-form" onSubmit={login}>
                    {/* username */}
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>

                    {/* password */}
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    {/* submit button */}
                    <Button className="login-button" type="submit">
                        Login
                    </Button>

                    {/* signup button */}
                    <Button className="signup-button" type="button" onClick={toggleView}>
                        Signup
                    </Button>
                </Form>
            </div>
        </>
    )
}