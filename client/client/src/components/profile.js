import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

export default function Profile() {
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();


    return (
        <Container>
            <div className="post-container">
            </div>
        </Container>
    );
}