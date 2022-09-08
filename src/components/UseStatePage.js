import {
  ChakraProvider,
  Heading,
  VStack,
  Checkbox,
  Highlight,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { useState } from "react";

import Heart from "./Mood";
import Moods from "./Moods";
import MoodTutorial from "./MoodTutorial";
import MoodsTutorial from "./MoodsTutorial";

function UseStatePage() {
  // Set state of checkbox
  const [checked, setChecked] = useState(false);

  return (
    <VStack spacing="30px">
      <Heading mt={10}>
        <Highlight
          query="usestate"
          styles={{ px: "2", py: "1", rounded: "full", bg: "pink.100" }}
        >
          emotionalState using useState (add sources!)
        </Highlight>
      </Heading>
      <Checkbox onChange={() => setChecked(!checked)}>Show tutorial</Checkbox>
      <Tabs
        align="center"
        variant="line"
        colorScheme={"cyan"}
        width={500}
        size={"sm"}
      >
        <TabList>
          <Tab>Simple</Tab>
          <Tab>In Data Viz</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{!checked ? <Heart /> : <MoodTutorial />}</TabPanel>
          <TabPanel>{!checked ? <Moods /> : <MoodsTutorial />}</TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
}

export default UseStatePage;
