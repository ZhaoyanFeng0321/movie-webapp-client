import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {createRoot} from "react-dom/client";
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App/>)
/*
ReactDOM.render( // use library to render
    <App />,
                 document.getElementById('root') // into element whose ID is root, the one declared earlier in index.html
);
*/
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
