import React from "react";
import { Link } from "@reach/router";

const Intro = () => {
  return (
    <div className="introduction">
      <p>
        I have been working as a web developer for about 4 years but have been
        building websites since the late 1990s when I built my first website
        using America Online&apos;s website builder. I love the thrill of
        discovering how to use technology to solve real-world problems, build
        innovative products, and solve challenging puzzles!
      </p>
      <p>
        <Link to="/details">Learn more about Kim</Link>
      </p>
    </div>
  );
};

export default Intro;
