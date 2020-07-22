import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import "./App.scss";
import SocialLink from "./SocialLink";
import Intro from "./Intro";
import Details from "./Details";
import Heart from "./Heart";
import kimImage from "./images/kim.jpg";

const App = () => {
  return (
    <div id="wrapper">
      <h1>
        Web Portfolio for <em>Kim Blott</em>
      </h1>
      <img
        src={kimImage}
        className="kim-image"
        alt="Kim Blott smiling into camera"
      />
      <h2>Web Developer | Problem Solver | Reformed Coffee Drinker</h2>
      <Router>
        <Intro path="/" />
        <Details path="/details" />
      </Router>
      <SocialLink />
      <footer>
        <hr />
        <Heart />
      </footer>
    </div>
  );
};

render(<App />, document.getElementById("root"));
