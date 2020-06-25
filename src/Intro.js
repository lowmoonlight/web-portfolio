import React from "react";
import { Link } from "@reach/router";

const Intro = () => {
  return (
    <div className="introduction">
      <p>
        I have been working as a web developer for about 4 years but have been
        building websites since the late 1990s when I built my first website
        using America Online&apos;s website builder. I have mostly worked with
        HTML, CSS/Sass, jQuery, and PHP but am currently studying vanilla
        JavaScript and React to get up to speed with those languages. There is
        nothing better than the thrill of getting things built using code!
      </p>
      <p>
        <Link to="/details">Learn more about Kim</Link>
      </p>
    </div>
  );
};

export default Intro;
