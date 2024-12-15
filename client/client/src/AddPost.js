import Header from "./components/header";
import Sidebar from "./components/sidebar";
import "./css/App.css";
import AddPost from "./components/addPost";

function App() {
    return (
        <div className="main-container">
            <Sidebar />
            <div className="middle-container">
                <div>
                    <Header />
                </div>
                <div style={{ marginTop: "10vh", marginLeft: "35vh" }}>
                    <AddPost />
                </div>
            </div>
        </div>
    );
}
export default App;