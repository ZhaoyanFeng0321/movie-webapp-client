import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Nav from "./components/navigation";
import OmdbSearch from "./screens/omdb-search";
import OmdbDetails from "./screens/omdb-details";

function App() {
  return (
      <div className="container">
        {/*<ProfileProvider>*/}
          <BrowserRouter>
              <div className="row">
                  <div className="col-2">
                     <Nav />
                  </div>

                  <div className="col-10">
                      <Routes>
                          <Route path="/search" element={<OmdbSearch/>} />
                          <Route path="/search/:movieSearch" element={<OmdbSearch/>} />
                          <Route path="/details/:imdbID" element={<OmdbDetails/>} />
                      </Routes>
                  </div>
              </div>






          </BrowserRouter>
        {/*</ProfileProvider>*/}
      </div>
  );
}

// function App() {
//   return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//   );
// }
export default App;
