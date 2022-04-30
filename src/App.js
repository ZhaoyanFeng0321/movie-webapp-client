import './App.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './utils/index.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Signup from "./screens/signup";
import Login from "./screens/login";
import Profile from "./screens/profile";
import EditProfile from "./screens/profile/edit-profile";
import Home from "./home/HomeScreen/index";
import Search from "./home/Search/Search";
import ResultScreen from "./home/Search/ResultScreen";
import OmdbDetails from "./screens/details/details-page";
import WatchListPage from "./home/WatchList/Watchlistpage";
import MovieApp from "./movieApp";
import ProfileScreen from "./screens/profile/profileScreen";
import {ProfileProvider} from "./profileProvider";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route element={<MovieApp/>}>
                        <Route index element={<Home/>}/>
                        <Route path="home" exact={true} element={<Home/>}>
                            <Route path=":username" element={<Home/>}/>
                        </Route>
                        <Route path="profile" element={<ProfileScreen/>}>
                            <Route index element={<ProfileScreen/>}/>
                            <Route path=":username" element={<ProfileScreen/>}/>
                        </Route>
                        <Route path="search" element={<Search/>}/>
                        {/*<Route path="/result/:username/:movieSearch" element={<Result/>}/>*/}
                        <Route path="result">
                            <Route path=":movieSearch" element={<ResultScreen/>}/>
                        </Route>
                        <Route path="details">
                            <Route path=":imdbID" element={<OmdbDetails/>}/>
                        </Route>

                        <Route path="list" element={<WatchListPage/>}/>
                    </Route>
                    <Route path="login" element={<Login/>}/>
                    <Route path="signup" element={<Signup/>}/>
                    {/*</Route>*/}

                    {/*</Route>*/}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;