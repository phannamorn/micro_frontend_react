import React from "react";
import ReactDOM from "react-dom";
import { Clock } from './components/Clock';

import "./index.css";

const App = () => (
  <div className="container">
    <Clock />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
