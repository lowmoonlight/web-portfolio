import React, { useState } from "react";

const Heart = () => {
  const [isPink, setIsPink] = useState(true);

  return (
    <footer>
      <hr />
      <p>
        Made with
        <span
          onClick={() => setIsPink(!isPink)}
          onKeyUp={() => setIsPink(!isPink)}
          role="button"
          tabIndex="0"
          style={{ color: isPink ? "#ff69b4" : "#f00" }}
        >
          &hearts;
        </span>
      </p>
    </footer>
  );
};

export default Heart;
