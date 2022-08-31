import { useState } from "react";
import {
  VStack,
  Box,
  Button,
  Text,
  Heading,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

import "./styles.css";

const buttonColor = "pink";
const moodOptions = ["Happy", "Sad", "Angry", "Anxious"];
const moodTooltipContent = {
  Happy: "Spread the joy! Bring someone else up.",
  Sad: "Do something you love with someone you love <3",
  Angry: "Walk it off (or run! or whatever activity might float your boat)",
  Anxious: "Take a deep breath; take care of yourself",
};

function Moods() {
  //   const [mood, setMood] = useState(null);

  //   const moodSwitch = () => setMood((mood) => !mood);
  const [activeMood, setActiveMood] = useState(null);

  return (
    <VStack>
      <Heading size={"md"}>What can I do when I'm feeling:</Heading>
      {moodOptions.map((mood) => {
        return (
          <Popover placement="right">
            <PopoverTrigger>
              <Button
                variant="link"
                onClick={() => setActiveMood(mood)}
                colorScheme={mood === activeMood ? "pink" : ""}
              >
                {mood}
              </Button>
            </PopoverTrigger>
            <PopoverContent bg="pink.200" color="white" fontWeight="semibold">
              <PopoverArrow bg="pink.200" />
              <PopoverBody>{moodTooltipContent[mood]}</PopoverBody>
            </PopoverContent>
          </Popover>
        );
      })}
    </VStack>
  );
}

export default Moods;
