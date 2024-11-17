<<<<<<< HEAD
import { Container} from "react-bootstrap";
=======
import { Container } from "react-bootstrap";
>>>>>>> 0c5359912aeed90b6fa1512f14b3b23e28209178
import { useState } from 'react';
import Register from "./components/register";
import ForgetPassword from "./components/forgetPassword"
import Login from "./components/login";
import Header from "./components/Header";
// import Sidebar from "./components/sidebar";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleView = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      {/* <Sidebar /> */}
      <Header />

      <Container>
            {showLogin ? (
              <Login toggleView={toggleView} />
            ) : (
              <ForgetPassword toggleView={toggleView} />
            )}
      </Container>
    </div>
  );
}
export default App;