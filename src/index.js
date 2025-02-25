// From SASVA
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import "primereact/resources/themes/saga-blue/theme.css"; // Choose a theme or use your own
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";

//global css
import "./global.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
