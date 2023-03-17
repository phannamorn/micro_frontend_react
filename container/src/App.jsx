import React from "react";
import ReactDOM from "react-dom";
import { Counter } from 'counter/Counter';
import { Clock } from 'clock/Clock';

import "./index.css";

const App = () => (
  <div className="container">
    <h1>Container APP</h1>
    <p>Counter App is being displayed as integrated Micro Front Ends</p>
    <Counter />
    <p>Clock App is being displayed as integrated Micro Front Ends</p>
    <Clock />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
