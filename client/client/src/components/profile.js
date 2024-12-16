import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

export default function Profile() {
    const [username, setUsername] = useState(localStorage.getItem('username'));
    const [email, setEmail] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [type, setType] = useState("");
    const [department, setDepartment] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const updateProfile = async (event) => {
        event.preventDefault();
        setErrorMessage("");

        if (!email) {
            setErrorMessage("All fields are required.");
            return;
        }

        try {
            const oldUsername = localStorage.getItem('username');

            const res = await axios.post("http://localhost:4000/profile", {
                oldUsername,
                newUsername: username,
                email,
                profilePicture,
                department
            });

            if (res.data.success) {
                alert(res.data.message);
                navigate("/profile");
            } else {
                setErrorMessage(res.data.message);
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "An error occurred");
        }
    };

    useEffect(() => {
        axios.get(`http://localhost:4000/profile/${username}`).then((response) => {
            setEmail(response.data.user.email);
            setProfilePicture(response.data.user.profilePicture);
            setType(response.data.user.type);
            setDepartment(response.data.user.department);
        });
    }, []);

    return (
        <Container>
            <div className="post-container">
                <Form className="post-form" onSubmit={updateProfile}>
                    <Form.Group controlId="formBasicTitle">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicContent">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicContent">
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                            type="text"
                            value={type}
                            disabled
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicContent">
                        <Form.Label>Department</Form.Label>
                        <Form.Control
                            // opions list
                            as="select"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            required
                        >
                            <option value="computing">Computing and Digital Tech</option>
                            <option value="business">Business</option>
                            <option value="cinematics">Cinematics</option>
                            <option value="media">New Media and Communications</option>
                            <option value="sports">Sports Management</option>
                        </Form.Control>
                    </Form.Group>
                    
                    {errorMessage && (
                        <div className="error-message">
                            <p>{errorMessage}</p>
                        </div>
                    )}

                    <Button className="post-button" type="submit">
                        Update Profile
                    </Button>
                </Form>
            </div>
        </Container>
    );
}