import React from "react";
import { render } from "react-dom";
import "./App.scss";
import SocialLink from "./SocialLink";

const App = () => {
  return (
    <div id="wrapper">
      <h1>
        Web Portfolio for <em>Kim Blott</em>
      </h1>
      <p>Hello, my name is Kim, and welcome to my space on the web!</p>
      <SocialLink />
    </div>
  );
};

render(<App />, document.getElementById("root"));
