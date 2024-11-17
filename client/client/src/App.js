import { Container } from "react-bootstrap";
import { useState } from 'react';
import Header from "./components/Header";
import Sidebar from "./components/sidebar";
import Boxes from "./components/boxes";
import "./css/App.css"

function App() {
  return (
    <div className="main-container">
      <div className="side-bar-container"><Sidebar /></div>
      <div className="middle-container">
        <div><Header /></div>
        <div>
          <Container style={{ marginTop: '20vh', marginLeft: '32vh' }}>
              {
                // Add your components here
                <Boxes />
              }
            </Container>
        </div>
      </div>
    </div>
  );
}
export default App;