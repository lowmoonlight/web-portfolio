import React from "react";
import { render } from "react-dom";
import "./App.scss";
import SocialLink from "./SocialLink";
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
      <h2>Web Developer | Problem Solver | Coffee Drinker</h2>
      <p>
        I have been working as a web developer for about 4 years but have been
        building websites since the late 1990s when I built my first website
        using America Online&apos;s website builder. I love the thrill of
        discovering how to use technology to solve real-world problems, build
        innovative products, and solve challenging puzzles!
      </p>
      <SocialLink />
      <Heart />
    </div>
  );
};

render(<App />, document.getElementById("root"));
