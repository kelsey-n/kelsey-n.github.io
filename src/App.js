// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";
import Bulbs from "./Mood";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Bulbs />
      </div>
    </ChakraProvider>
  );
}

export default App;
