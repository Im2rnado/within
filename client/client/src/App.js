import { Container, Col, Row } from "react-bootstrap";
import Register from "./components/register";
import Login from "./components/login";
function App() {
  return (
    <Container>
      <Row>
        {/* Two columns in large and medium devices and one column on small and extra small devices */}
        <Col xs={12} sm={12} md={6} lg={6}>
          <Register />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Login />
        </Col>
      </Row>
    </Container>
  );
}
export default App;