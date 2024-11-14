import { Container, Col, Row } from "react-bootstrap";
import { useState } from 'react';
import Register from "./components/register";
import Login from "./components/login";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleView = () => {
    setShowLogin(!showLogin);
  };

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          {showLogin ? (
            <Login toggleView={toggleView} />
          ) : (
            <Register toggleView={toggleView} />
          )}
        </Col>
      </Row>
    </Container>
  );
}
export default App;