import Header from "./components/header";
import Sidebar from "./components/sidebar";
import "./css/App.css";
import AddAnnouncement from "./components/addAnnouncement";

function App() {
    return (
        <div className="main-container">
            <Sidebar />
            <div className="middle-container">
                <div>
                    <Header />
                </div>
                <div style={{ marginTop: "10vh", marginLeft: "35vh" }}>
                    <AddAnnouncement />
                </div>
            </div>
        </div>
    );
}
export default App;