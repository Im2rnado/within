import Header from "./components/header";
import Sidebar from "./components/sidebar";
import "./css/App.css";
import Home from "./components/home";

function App() {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="middle-container">
        <div>
          <Header />
        </div>
        <div style={{ marginTop: "20vh", marginLeft: "35vh" }}>
          <Home />
        </div>
      </div>
    </div>
  );
}
export default App;
