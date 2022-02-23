import React, { useState, useEffect } from "react";

export const Counter = (props) => {
  const [count, setCount] = useState(props.start);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev > props.end - 1) clearInterval(timer);
        return prev + 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <React.Fragment>
      <h1>Timer</h1>
      <div value={count}>{count}</div>

      <button>double</button>
    </React.Fragment>
  );
};
