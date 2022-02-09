import React, { useState } from "react";
import { Counter } from "./component/Counter";
import InputCount from "./component/InputCount";
import classes from "./App.module.css";

function App() {
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  const setCountHandler = (start, end) => {
    setStart(start);
    setEnd(end);
  };
  return (
    <div className={classes.App}>
      {!start && <InputCount setCount={setCountHandler} />}
      {start && <Counter start={start} end={end} />}
    </div>
  );
}

export default App;
