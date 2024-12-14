import Header from "./components/header";
import Sidebar from "./components/sidebar";
import "./css/App.css";
import Posts from "./components/posts";

function App() {
    return (
        <div className="main-container">
            <Sidebar />
            <div className="middle-container">
                <div>
                    <Header />
                </div>
                <div style={{ marginTop: "20vh", marginLeft: "35vh" }}>
                    <h1>Posts</h1>
                    <div className="boxes-container">
                        <div className="grid-container">
                            <Posts />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;
