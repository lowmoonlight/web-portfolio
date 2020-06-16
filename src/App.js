import React from "react";
import { render } from "react-dom";
import "./App.scss";

const App = () => {
  return (
    <div id="wrapper">
      <h1>
        Web Portfolio for <em>Kim Blott</em>
      </h1>
      <p>Hello, my name is Kim, and welcome to my space on the web.</p>
    </div>
  );
};

render(<App />, document.getElementById("root"));
