import Header from "./components/header";
import Sidebar from "./components/sidebar";
import "./css/App.css";
import Home from "./components/home";
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
          <Home />
        </div>
      </div>
    </ThemeProvider>
  );
}
export default App;
