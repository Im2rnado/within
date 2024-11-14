import React from "react";
import { Form, Button } from "react-bootstrap";

export default function Register() {
    return (
        <>
            <h2>Register</h2>
            <Form>
                {/* name */} <Form.Group controlId="formBasicName">

                    <Form.Label>Name</Form.Label>

                    <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>
                {/* email */}

                <Form.Group controlId="formBasicEmail">

                    <Form.Label>Email</Form.Label>

                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                {/* password */}

                <Form.Group controlId="formBasicPassword">

                    <Form.Label>Password</Form.Label>

                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                {/* submit button */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>

    )
}