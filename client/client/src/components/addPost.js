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
                <Form className="post-form" onSubmit={createPost}>
                    <Form.Group controlId="formBasicTitle">
                        <Form.Label>Post Title</Form.Label>
                        <Form.Control
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicContent">
                        <Form.Label>Post Content</Form.Label>
                        <Form.Control
                            as="textarea"
                            className="content-textarea"
                            rows={5}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </Form.Group>

                    {errorMessage && (
                        <div className="error-message">
                            <p>{errorMessage}</p>
                        </div>
                    )}

                    <Button className="post-button" type="submit">
                        Post
                    </Button>
                </Form>
            </div>
        </Container>
    );
}