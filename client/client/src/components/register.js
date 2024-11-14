import React from "react";
import { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default function Register() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [type, setType] = useState("student");

    const register = async (event) => {
        event.preventDefault();

        try {
            const res = await axios.post("http://localhost:4000/register", { username, password, email, type });

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
                <h2>Register</h2>
                <Form className="login-form" onSubmit={register}>
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
                    {/* submit button */}
                    <Button className="login-button" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}