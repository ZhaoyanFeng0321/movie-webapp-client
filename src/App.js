import './App.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './utils/index.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Signup from "./screens/signup";
import Login from "./screens/login";
import Profile from "./screens/profile";
import EditProfile from "./screens/profile/edit-profile";
import HomeScreen from "./home/HomeScreen/HomeScreen";
import Search from "./home/Search/Search";
import ResultScreen from "./home/Search/ResultScreen";
import Home from "./home/HomeScreen";
import {Provider} from "react-redux";
import OmdbDetails from "./screens/details/details-page";
import MovieApp from "./movieApp";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    {/*<Route path="/">*/}


                    {/*<Route path="/">*/}
                        <Route element={<MovieApp/>}>
                            <Route index element={<HomeScreen/>} />
                            <Route path="home" exact={true} element={<HomeScreen/>}>
                                <Route path=":username" element={<Home/>}/>
                            </Route>
                            <Route path="profile" element={<Profile/>}>
                                <Route path=":username" element={<Profile/>}>
                                    <Route path="edit" element={<EditProfile/>}/>
                                </Route>
                                {/*<Route path="profile/:username/*" element={<Profile/>}/>*/}
                            </Route>
                            <Route path="search" element={<Search/>}/>
                            {/*<Route path="/result/:username/:movieSearch" element={<Result/>}/>*/}
                            <Route path="result">
                                <Route path=":movieSearch" element={<ResultScreen/>}/>
                            </Route>
                            <Route path="details">
                                <Route path=":imdbID" element={<OmdbDetails/>}/>
                            </Route>
                            <Route path="login" element={<Login/>}/>
                            <Route path="signup" element={<Signup/>}/>
                        </Route>

                    {/*</Route>*/}

                    {/*</Route>*/}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
