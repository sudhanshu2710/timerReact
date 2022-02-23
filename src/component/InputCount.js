import React, { useState } from "react";

const InputCount = (props) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const setStartInout = (e) => {
    setStart(Number(e.currentTarget.value));
  };
  const setEndInput = (e) => {
    setEnd(Number(e.currentTarget.value));
  };
  const sendCount = () => {
    props.setCount(start, end);
  };
  return (
    <React.Fragment>
      <h3>Input the time interval</h3>
      <label>start</label>
      <input
        type="text"
        value={start}
        onChange={setStartInout}
        placeholder="start time"
      ></input>
      <input
        type="text"
        value={end}
        onChange={setEndInput}
        placeholder="end time"
      ></input>
      <button onClick={sendCount}>START TIMER</button>
    </React.Fragment>
  );
};

export default InputCount;
