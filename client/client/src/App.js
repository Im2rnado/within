import { Container } from "react-bootstrap";
import { useState } from 'react';
import Header from "./components/Header";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Container style={{ marginTop: '60px', marginLeft: '240px' }}>
        {/* Your main content goes here */}
      </Container>
    </div>
  );
}
export default App;