import React, { useState } from "react";

const Heart = () => {
  const [isPink, setIsPink] = useState(true);

  return (
    <footer>
      <hr />
      <p>
        Made with
        <span
          onMouseEnter={() => setIsPink(!isPink)}
          onMouseLeave={() => setIsPink(!isPink)}
          onFocus={() => setIsPink(!isPink)}
          onBlur={() => setIsPink(!isPink)}
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
