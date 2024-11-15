import { Container, Col, Row } from "react-bootstrap";
import { useState } from 'react';
import Register from "./components/register";
import Login from "./components/login";
import Header from "./components/Header";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleView = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <Header />

      <Container>
            {showLogin ? (
              <Login toggleView={toggleView} />
            ) : (
              <Register toggleView={toggleView} />
            )}
      </Container>
    </div>
  );
}
export default App;