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

import Heart from "./components/Mood";
import Moods from "./components/Moods";
import MoodTutorial from "./components/MoodTutorial";

function App() {
  // Set state of checkbox
  const [checked, setChecked] = useState(false);

  return (
    <ChakraProvider>
      <VStack spacing="30px">
        <Heading mt={10}>
          <Highlight
            query="usestate"
            styles={{ px: "2", py: "1", rounded: "full", bg: "pink.100" }}
          >
            emotionalState using useState
          </Highlight>
        </Heading>
        <Checkbox onChange={() => setChecked(!checked)}>Show tutorial</Checkbox>
        <Tabs align="center" variant="line" colorScheme={"cyan"} width={500}>
          <TabList>
            <Tab>Simple</Tab>
            <Tab>In Data Viz</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{!checked ? <Heart /> : <MoodTutorial />}</TabPanel>
            <TabPanel>
              <Moods />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
