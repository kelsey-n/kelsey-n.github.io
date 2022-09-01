import { useState } from "react";
import {
  VStack,
  Box,
  Button,
  Text,
  HStack,
  Tooltip,
  Divider,
} from "@chakra-ui/react";

import "./styles.css";

const buttonColor = "pink";
const tooltipBackground = "cyan.100";
const tooltipFont = "black";
const stateLabel =
  "information related to the component (eg. a boolean, number, string, array or object) that lets us control its behavior";
const introText = (
  <Text>
    useState is a React hook that allows us control the{" "}
    <Tooltip
      hasArrow
      label={stateLabel}
      bg={tooltipBackground}
      color={tooltipFont}
      placement="top"
    >
      <u>
        <b>state</b>
      </u>
    </Tooltip>{" "}
    of a rendered component. Hover on the numbered steps to find out how!
  </Text>
);
const label1 = (
  <Text>
    <em>Initialize</em> the state - We define the happy mood as true, and{" "}
    <kbd>useState(true)</kbd> sets the initial mood to happy (so the heart is
    whole when we first load the page!)
  </Text>
);
const label2 = (
  <Text>
    <em>Update</em> the state - Each time we click the button, we set the new
    state value (or mood) to be the opposite of the current one:
    <br />
    <kbd>setState(state ={">"} !state)</kbd> <br /> <em>Click the button!</em>
  </Text>
);
const label3 = (
  <Text>
    <em>Read</em> the state - after clicking the button, we see if the value of{" "}
    <kbd>state</kbd> is <kbd>true</kbd> or <kbd>false</kbd> and set the class
    styles accordingly:
    <br />
    <kbd>
      className= {"{"}state ? "state-happy":"state-sad"{"}"}
    </kbd>
  </Text>
);
const label4Sad = (
  <Text>
    The new class changes the background image to match the state determined by
    useState. <br />
    Essentially: state=false &#x2192; class/style=sad &#x2192; heart=broken :(
  </Text>
);
const label4Happy = (
  <Text>
    The new class changes the background image to match the state determined by
    useState. <br />
    Essentially: state=true &#x2192; class/style=happy &#x2192; heart=whole :)
  </Text>
);

function HeartTutorial() {
  const [mood, setMood] = useState(true);
  const [clicked, setClicked] = useState(false);

  const moodSwitch = () => {
    setMood((mood) => !mood);
    setClicked(true);
  };

  return (
    <VStack height={250}>
      {introText}
      <Divider orientation="vertical" />
      <HStack>
        <Tooltip
          label={label1}
          bg={tooltipBackground}
          color={tooltipFont}
          placement="left"
        >
          <Text _hover={{ cursor: "pointer" }}>1.</Text>
        </Tooltip>
        <Box className={mood ? "mood-happy" : "mood-sad"} />
        {clicked ? (
          <Tooltip
            label={!mood ? label4Sad : label4Happy}
            bg={tooltipBackground}
            color={tooltipFont}
            placement="right"
          >
            <Text _hover={{ cursor: "pointer" }}>4.</Text>
          </Tooltip>
        ) : (
          ""
        )}
      </HStack>
      <HStack>
        <Tooltip
          label={label2}
          bg={tooltipBackground}
          color={tooltipFont}
          placement="left"
        >
          <Text _hover={{ cursor: "pointer" }}>2.</Text>
        </Tooltip>
        <Button
          onClick={moodSwitch}
          colorScheme={buttonColor}
          size={"sm"}
          mt={7}
        >
          Toggle Mood
        </Button>
        {clicked ? (
          <Tooltip
            label={label3}
            bg={tooltipBackground}
            color={tooltipFont}
            placement="right"
          >
            <Text _hover={{ cursor: "pointer" }}>3.</Text>
          </Tooltip>
        ) : (
          ""
        )}
      </HStack>
    </VStack>
  );
}

export default HeartTutorial;
