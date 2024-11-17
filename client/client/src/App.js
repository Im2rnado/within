import { Container } from "react-bootstrap";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Boxes from "./components/boxes";

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Container style={{ marginTop: '20vh', marginLeft: '32vh' }}>
        {
          // Add your components here
          <Boxes />
        }
      </Container>
    </div>
  );
}
export default App;