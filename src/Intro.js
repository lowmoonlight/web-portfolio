import React from "react";
import { Link } from "@reach/router";

const Intro = () => {
  return (
    <div className="introduction">
      <p>
        I have been working as a web developer professionally since 2016 but have been
        building websites since the late 1990s when I built my first website
        using America Online&apos;s website builder. There is
        nothing better than the thrill of getting things built using code!
      </p>
      <p>
        <Link to="/details">Learn more about Kim</Link>
      </p>
    </div>
  );
};

export default Intro;
