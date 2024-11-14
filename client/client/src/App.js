import { Container, Col, Row } from "react-bootstrap";
import { useState } from 'react';
import Register from "./components/register";
import Login from "./components/login";
import axios from "axios";

function App() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:4000/login", { username, password });

      if (res.data.success === true) {
        alert(res.data.message);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <Container>
      <Row>
        {
          <Col xs={12} sm={12} md={6} lg={6}>
            <Login setUsername={setUsername} setPassword={setPassword} login={login} />
          </Col>
        }
      </Row>
    </Container>
  );
}
export default App;