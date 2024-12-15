import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

export default function AddPost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const createPost = async (event) => {
        event.preventDefault();
        setErrorMessage("");

        if (!title || !content) {
            setErrorMessage("All fields are required.");
            return;
        }

        try {
            const username = localStorage.getItem('username');

            const res = await axios.post("http://localhost:4000/addPost", {
                author: username,
                title,
                content
            });

            if (res.data.success) {
                alert(res.data.message);
                navigate("/posts");
            } else {
                setErrorMessage(res.data.message);
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "An error occurred");
        }
    };

    return (
        <Container>
            <div className="post-container">
                <Form className="post-form">
                    <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your first name"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your last name"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="Enter your phone number"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter a new password"
                            required
                        />
                    </Form.Group>

                    {errorMessage && (
                        <div className="error-message">
                            <p>{errorMessage}</p>
                        </div>
                    )}

                    <Button className="post-button" type="submit">
                        Save Changes
                    </Button>
                </Form>
            </div>
        </Container>
    );
}
