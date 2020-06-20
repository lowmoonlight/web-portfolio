import React from "react";
import { Link } from "@reach/router";

const Details = () => {
  const kimDetails = {
    city: "Northville",
    state: "Michigan",
    roommates: "cactus plants",
    hobbies:
      "reading, baking, drinking coffee, and walking when I could just as easily drive",
  };

  return (
    <div className="more-info">
      <p>
        I currently live in {kimDetails.city}, {kimDetails.state} with a variety
        of {kimDetails.roommates}. In my free time, I gravitate toward{" "}
        {kimDetails.hobbies}.
      </p>
      <p>
        <Link to="/">Back to the home page</Link>
      </p>
    </div>
  );
};

export default Details;
