import { useState } from "react";
import {
  VStack,
  HStack,
  Box,
  Button,
  Text,
  UnorderedList,
  OrderedList,
  ListItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from "@chakra-ui/react";

import "./styles.css";

const buttonColor = "pink";

function HeartTutorial() {
  const [mood, setMood] = useState(true);
  const [hoverHeart, setHoverHeart] = useState(false);
  const [hoverButton, setHoverButton] = useState(false);
  const [clickButton, setClickButton] = useState(false);

  const moodSwitch = () => {
    setMood((mood) => !mood);
    setHoverButton(false); // when the button is clicked, simultaneously set the hover to false so the hovering tooltip disappears
    setClickButton(true);
  };

  console.log(window.innerWidth);

  return (
    <VStack>
      <Text>useState allows us to do 3 things. Hover to find out!</Text>
      <Popover placement="right" isOpen={hoverHeart}>
        <PopoverTrigger>
          <Box
            className={mood ? "mood-happy" : "mood-sad"}
            onMouseEnter={() => setHoverHeart(true)}
            onMouseLeave={() => setHoverHeart(false)}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow bg="cyan.200" />
          <PopoverBody bg="cyan.200">
            1. <em>Initialize</em> the state - <kbd>useState(true)</kbd> sets
            the initial mood to happy (the heart is whole when we first load the
            page!)
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <Popover placement="right" isOpen={hoverButton}>
        <PopoverTrigger>
          <Button
            onClick={moodSwitch}
            colorScheme={buttonColor}
            size={"sm"}
            mt={7}
            onMouseEnter={() => setHoverButton(true)}
            onMouseLeave={() => {
              setHoverButton(false);
              setClickButton(false);
            }}
          >
            Toggle Mood
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow bg="cyan.200" />
          <PopoverBody bg="cyan.200">
            2. <em>Update</em> the state - each time we click the button, we set
            a new state value to be the opposite of the current one:{" "}
            <kbd>setState(state ={">"} !state)</kbd>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <Popover placement="right" isOpen={clickButton} top={200} left={100}>
        <PopoverContent>
          <PopoverArrow bg="cyan.200" />
          <PopoverBody bg="cyan.200">
            3. <em>Read</em> the state - we see if the value of <kbd>state</kbd>{" "}
            is <kbd>true</kbd> or <kbd>false</kbd> and set the class styles
            accordingly:{"\n"}
            <kbd>
              className={"{"}state ? "state-happy":"state-sad"{"}"}
            </kbd>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </VStack>
  );
}

export default HeartTutorial;
