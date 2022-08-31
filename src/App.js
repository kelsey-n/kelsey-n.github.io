import {
  ChakraProvider,
  Heading,
  VStack,
  Box,
  Highlight,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import ButtonNav from "./components/NavButtonGroup";
import Heart from "./components/Mood";

function App() {
  return (
    <ChakraProvider>
      <VStack spacing="30px">
        <Heading>
          <Highlight
            query="usestate"
            styles={{ px: "2", py: "1", rounded: "full", bg: "pink.100" }}
          >
            Using useState to explore emotional state
          </Highlight>
        </Heading>
        <Tabs variant="line" colorScheme={"cyan"}>
          <TabList>
            <Tab>Simple</Tab>
            <Tab>In Data Viz</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Heart />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
