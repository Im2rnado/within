import Header from "./components/header";
import Sidebar from "./components/sidebar";
import "./css/App.css";
import Announcements from "./components/announcements";
import { ThemeProvider } from './ThemeContext';

function App() {
    return (
        <ThemeProvider className="main-container">
            <Sidebar />
            <div className="middle-container">
                <div>
                    <Header />
                </div>
                <div style={{ marginTop: "20vh", marginLeft: "35vh" }}>
                    <h1><span className="icon">📢</span>Announcements</h1>
                    <div className="boxes-container">
                        <Announcements />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}
export default App;
