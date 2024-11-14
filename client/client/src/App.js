import { Container, Col, Row } from "react-bootstrap";
import Register from "./components/register";
import Login from "./components/login";

function App() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Login />
        </Col>

        <Col xs={12} sm={12} md={6} lg={6}>
          <Register />
        </Col>
      </Row>
    </Container>
  );
}
export default App;