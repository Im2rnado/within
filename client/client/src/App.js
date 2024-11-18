import Header from "./components/Header";
import Sidebar from "./components/sidebar";
import Boxes from "./components/boxes";
import "./css/App.css";

function App() {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="middle-container">
        <div>
          <Header />
        </div>
        <div style={{ marginTop: "20vh", marginLeft: "35vh" }}>
          {
            // Add your components here
            <Boxes />
          }
        </div>
      </div>
    </div>
  );
}
export default App;
