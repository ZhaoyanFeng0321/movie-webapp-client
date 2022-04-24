import logo from './logo.svg';
import './App.css';
import DetailPage from "./movie/MovideDetailsPage/DetailPage";
import Movie from "./movie";
import './vendors/bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome-free-6.0.0-web/css/all.min.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import React, { Component } from 'react';

// function App() {
//   return (
//       <BrowserRouter>
//         <div className="container">
//           <Routes>
//
//             <Route path="/movie/details"
//                    exact={true}
//                    element={<Movie/>}/>
//
//
//
//
//
//
//           </Routes>
//         </div>
//       </BrowserRouter>
//   );
// }


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
