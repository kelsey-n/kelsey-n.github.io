import { useState } from "react";
import { Button } from "@chakra-ui/react";

import "./App.css";

const buttonColor = "pink";

function Heart() {
  const [mood, setMood] = useState(false);

  const moodSwitch = () => setMood((mood) => !mood);

  return (
    <>
      <div className={mood ? "mood-happy" : "mood-sad"} />
      <Button onClick={moodSwitch} colorScheme={buttonColor} size={"sm"}>
        Toggle Mood
      </Button>
    </>
  );
}

export default Heart;
