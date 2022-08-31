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

import Heart from "./components/Mood";
import Moods from "./components/Moods";

function App() {
  return (
    <ChakraProvider>
      <VStack spacing="30px">
        <Heading mt={10}>
          <Highlight
            query="usestate"
            styles={{ px: "2", py: "1", rounded: "full", bg: "pink.100" }}
          >
            Using useState to explore emotional state
          </Highlight>
        </Heading>
        <Tabs align="center" variant="line" colorScheme={"cyan"}>
          <TabList>
            <Tab>Simple</Tab>
            <Tab>In Data Viz</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Heart />
            </TabPanel>
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
