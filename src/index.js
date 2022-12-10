// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// Last imports used (12/6/22 at 5:48pm) - use
import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';

// Old way - do not use this
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );

// React 18 - last way of doing it (12/6/22 at 5:45pm) - use
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);



// // react 17.0 example
// import React from "react";
// import { render } from "react-dom";
// import "./index.css";
// import App from "./App";

// const root = document.getElementById("root");
// render(<App />, root);