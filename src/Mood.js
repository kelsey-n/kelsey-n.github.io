import { useState } from "react";

import "./App.css";

function Bulbs() {
  const [on, setOn] = useState(false);

  const lightSwitch = () => setOn((on) => !on);

  return (
    <>
      <div className={on ? "bulb-on" : "bulb-off"} />
      <button onClick={lightSwitch}>Happy/Sad</button>
    </>
  );
}

export default Bulbs;
