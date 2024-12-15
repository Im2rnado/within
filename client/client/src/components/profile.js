import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import "../css/App.css"; // Assuming the CSS provided is in styles.css

export default function Profile() {
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
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
                        <Form.Label>Last Namee</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your last name"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Emaail</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                    </Form.Group>

                    

                    <Form.Group controlId="formPassword">
                        <Form.Label>Passwordd</Form.Label>
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
                        Saveee Changes
                    </Button>
                </Form>
            </div>
        </Container>
    );
}
