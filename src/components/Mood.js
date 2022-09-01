import { useState } from "react";
import { VStack, Box, Button } from "@chakra-ui/react";

import "./styles.css";

const buttonColor = "pink";

function Heart() {
  const [mood, setMood] = useState(true);

  const moodSwitch = () => setMood((mood) => !mood);

  return (
    <VStack>
      <Box className={mood ? "mood-happy" : "mood-sad"} />
      <Button onClick={moodSwitch} colorScheme={buttonColor} size={"sm"} mt={7}>
        Toggle Mood
      </Button>
    </VStack>
  );
}

export default Heart;
