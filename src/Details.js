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

  const {
    city: town,
    state: region,
    roommates: roomies,
    hobbies: activities,
  } = kimDetails;

  return (
    <div className="more-info">
      <p>
        I currently live in {town}, {region} with a variety of {roomies}. In my
        free time, I gravitate toward spending my time on {activities}.
      </p>
      <p>
        <Link to="/">Back to the home page</Link>
      </p>
    </div>
  );
};

export default Details;
