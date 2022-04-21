import './App.css';

import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Signup from "./screens/signup";
import Login from "./screens/login";

function App() {
  return (
    <ProfileProvider>
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route path="/profile" element={
              <SecureRoute>
                <Profile/>
              </SecureRoute>
            }/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
    </ProfileProvider>
  );
}

export default App;
