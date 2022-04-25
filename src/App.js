import './App.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './utils/index.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Signup from "./screens/signup";
import Login from "./screens/login";
import HomeScreen from "./home/HomeScreen/HomeScreen";
import Search from "./home/Search/Search";
import ResultScreen from "./home/Search/ResultScreen";

function App() {
  return (
    // <ProfileProvider>
    <BrowserRouter>
      <div className="container">
        <Routes>
          {/*<Route path="/">*/}
            {/*<Route path="/profile" element={*/}
            {/*  <SecureRoute>*/}
            {/*    <Profile/>*/}
            {/*  </SecureRoute>*/}
            {/*}/>*/}

            <Route path="/">
                <Route index element={<HomeScreen/>} />
                <Route path="home" exact={true} element={<HomeScreen/>}/>
            </Route>
            <Route path="/search" element={<Search/>}/>
            <Route path="/result/:movieSearch" element={<ResultScreen/>}/>

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
