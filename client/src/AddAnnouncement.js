import Header from "./components/header";
import Sidebar from "./components/sidebar";
import "./css/App.css";
import AddAnnouncement from "./components/addAnnouncement";
import { ThemeProvider } from './ThemeContext';

function App() {
    return (
        <ThemeProvider className="main-container">
            <Sidebar />
            <div className="middle-container">
                <div>
                    <Header />
                </div>
                <div style={{ marginTop: "10vh", marginLeft: "35vh" }}>
                    <AddAnnouncement />
                </div>
            </div>
        </ThemeProvider>
    );
}
export default App;