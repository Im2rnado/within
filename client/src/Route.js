import { Route, Routes, BrowserRouter } from 'react-router-dom';
import App from "./App.js"
import ForgetPassword from './components/forgetPassword';
import Login from './components/login.js';
import Register from './components/register.js';
import Posts from './Posts.js';
import Announcements from './Announcements.js';
import AddPost from './AddPost.js';
import AddAnnouncement from './AddAnnouncement.js';
import Profile from './Profile.js';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="reset" element={<ForgetPassword />} />

        <Route path="home" element={<App />} />
        <Route path="posts" element={<Posts />} />
        <Route path="announcements" element={<Announcements />} />
        <Route path="add-post" element={<AddPost />} />
        <Route path="add-announcement" element={<AddAnnouncement />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;