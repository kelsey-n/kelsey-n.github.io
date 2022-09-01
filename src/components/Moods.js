import { useState } from "react";
import {
  VStack,
  Button,
  Heading,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Tooltip,
} from "@chakra-ui/react";

import "./styles.css";

const moodOptions = ["Happy", "Sad", "Angry", "Anxious"];
const moodTooltipContent = {
  Happy: "Spread the joy! Bring someone else up.",
  Sad: "Do something you love with someone you love <3",
  Angry: "Walk it off (or run! or whatever activity might float your boat)",
  Anxious: "Take a deep breath; take care of yourself",
};

const tooltipBackground = "cyan.100";
const tooltipFont = "black";
const disclaimer =
  "These suggestions do not consist of actual professional advice, they are simply for learning purposes :)";

function Moods() {
  const [activeMood, setActiveMood] = useState(null);

  return (
    <VStack>
      <Heading size={"md"}>
        <Tooltip
          label={disclaimer}
          bg={tooltipBackground}
          color={tooltipFont}
          placement="top"
        >
          <u>What can I do</u>
        </Tooltip>{" "}
        when I'm feeling:
      </Heading>
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
