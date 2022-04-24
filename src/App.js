// import logo from './logo.svg';
import './App.css';

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProfileScreen from "./components/profile-screen/ProfileScreen"
import EditProfile from "./components/profile-screen/EditProfile"
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import profileReducer from "./components/reduers/profile-reducer";
import moviesReducer from "./components/reduers/movie-reducer";
import reviewsReducer from "./components/reduers/review-reducer";
import actorReducer from "./components/reduers/actor-reducer";
import ActorProfile from "./components/profile-screen/ActorProfile";

const reducer = combineReducers(
    {
        profile: profileReducer,
        movies: moviesReducer,
        reviews: reviewsReducer,
        actor: actorReducer})
const store = createStore(reducer);

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <div className="container">
                  <Routes>
                      {/*<Route path="/">*/}
                      <Route path="/profile" exact={true}
                             element={<ProfileScreen/>}/>
                      <Route path="/edit"
                             element={<EditProfile/>}/>
                      <Route path="/profile/:actorID"
                             element={<ActorProfile/>}/>
                      {/*</Route>*/}
                  </Routes>
              </div>
          </BrowserRouter>
      </Provider>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
