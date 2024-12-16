import Header from "./components/header";
import Sidebar from "./components/sidebar";
import "./css/App.css";
import Profile from "./components/profile";

function App() {
    return (
        <div className="main-container">
            <Sidebar />
            <div className="middle-container">
                <div>
                    <Header />
                </div>
                <div style={{ marginTop: "20vh", marginLeft: "35vh" }}>
                    <h1><span className="icon">👤</span>Profile</h1>
                    <div className="boxes-container">
                        <Profile />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;