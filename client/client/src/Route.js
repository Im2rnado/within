import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ForgetPassword from './components/forgetPassword';
import Appp from "./App.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Appp />} />
        <Route path="reset" element={<ForgetPassword />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;