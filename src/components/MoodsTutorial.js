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
  Text,
  Tooltip,
  HStack,
  Divider,
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

const introText = (
  <Text>
    In more complex settings useState enables functionality that we all know and
    love! For example, it allows us to set, update and read the active element -
    whatever the user is hovering over or has clicked on.
  </Text>
);
const label1 = (
  <Text>
    In this example, clicking on a mood sets the active mood to the selected
    mood.
    <br /> <em>Click on a mood!</em>
  </Text>
);
const label3 = (
  <Text>
    Note that even after we close the tooltip, the active state is still set!
    This persistance can be useful (eg. if we need to remember what the
    active/selected element is on another page for future user interactions).
    <br />
    <br />
    Alternatively, we could have set the active mood/element to <kbd>
      null
    </kbd>{" "}
    upon closing the tooltip.
  </Text>
);

function MoodsTutorial() {
  const [activeMood, setActiveMood] = useState(null);
  const [clicked, setClicked] = useState(false);

  // define label2 here since it relies on state set in this function
  const label2 = (
    <Text>
      <kbd>activeMood = {activeMood}</kbd>
      <br />
      We can then style the active mood differently from the others to highlight
      the user's choice. We also change the content of the tooltip to suit.
    </Text>
  );

  return (
    <VStack height={260}>
      {introText}
      <Divider orientation="vertical" />
      <Heading size={"md"}>What can I do when I'm feeling:</Heading>
      <HStack width={100}>
        <VStack>
          <Tooltip
            label={label1}
            bg={tooltipBackground}
            color={tooltipFont}
            placement="left"
          >
            <Text _hover={{ cursor: "pointer" }}>1.</Text>
          </Tooltip>
          {clicked ? (
            <Tooltip
              label={label2}
              bg={tooltipBackground}
              color={tooltipFont}
              placement="left"
            >
              <Text _hover={{ cursor: "pointer" }}>2.</Text>
            </Tooltip>
          ) : (
            ""
          )}
          {clicked ? (
            <Tooltip
              label={label3}
              bg={tooltipBackground}
              color={tooltipFont}
              placement="left"
            >
              <Text _hover={{ cursor: "pointer" }}>3.</Text>
            </Tooltip>
          ) : (
            ""
          )}
        </VStack>
        <Divider orientation="horizontal" />
        <VStack>
          {moodOptions.map((mood) => {
            return (
              <Popover placement="right">
                <PopoverTrigger>
                  <Button
                    variant="link"
                    onClick={() => {
                      setActiveMood(mood);
                      setClicked(true);
                    }}
                    colorScheme={mood === activeMood ? "pink" : ""}
                  >
                    {mood}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  bg="pink.200"
                  color="white"
                  fontWeight="semibold"
                >
                  <PopoverArrow bg="pink.200" />
                  <PopoverBody>{moodTooltipContent[mood]}</PopoverBody>
                </PopoverContent>
              </Popover>
            );
          })}
        </VStack>
      </HStack>
    </VStack>
  );
}

export default MoodsTutorial;
