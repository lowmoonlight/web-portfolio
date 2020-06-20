import React, { useState } from "react";

const Heart = () => {
  const [isPink, setIsPink] = useState(true);

  return (
    <p>
      Made with
      <span
        onClick={() => setIsPink(!isPink)}
        onTouchStart={() => setIsPink(!isPink)}
        onTouchEnd={() => setIsPink(!isPink)}
        onKeyUp={() => setIsPink(!isPink)}
        role="button"
        tabIndex="0"
        style={{ color: isPink ? "#ff69b4" : "#f00" }}
        title="Click me!"
      >
        &hearts;
      </span>
    </p>
  );
};

export default Heart;
