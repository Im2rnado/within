import React from "react";
import { Form, Button } from "react-bootstrap";

export default function Login({ setUsername, setPassword, login }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        login();
    }

    return (
        <>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}