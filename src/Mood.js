import { useState } from "react";

import "./App.css";

function Bulbs() {
  const [on, setOn] = useState(false);

  const lightSwitch = () => setOn((on) => !on);

  return (
    <>
      <div className={on ? "bulb-on" : "bulb-off"} />
      <button onClick={lightSwitch}>On/off</button>
    </>
  );
}

export default Bulbs;
