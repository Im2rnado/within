import Header from "./components/header";
import Sidebar from "./components/sidebar";
import "./css/App.css";
import Posts from "./components/posts";
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
                    <h1><span className="icon">📋</span>Posts</h1>
                    <div className="boxes-container">
                        <Posts />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}
export default App;
