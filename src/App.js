import './App.css';

import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Signup from "./screens/signup";
import Login from "./screens/login";
import Profile from "./screens/profile";
import EditProfile from "./screens/profile/edit-profile";

function App() {
  return (
    // <ProfileProvider>
    <BrowserRouter>
      <div className="container">
        <Routes>
          {/*<Route path="/">*/}
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/profile/:username/edit" element={<EditProfile/>}/>
            <Route path="/profile/:username" element={<Profile/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
          {/*</Route>*/}
        </Routes>
      </div>
    </BrowserRouter>
    // </ProfileProvider>
  );
}

export default App;
