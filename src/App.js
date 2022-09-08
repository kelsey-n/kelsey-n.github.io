import React from "react";
// import { useRoutes, A } from "hookrouter";
// import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import {
  ChakraProvider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import UseStatePage from "./components/UseStatePage";

function App() {
  return (
    <ChakraProvider>
      <Tabs variant={"enclosed"} size="lg" colorScheme={"cyan"}>
        <TabList>
          <Tab>useState</Tab>
          <Tab>useEffect</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <UseStatePage />
          </TabPanel>
          <TabPanel>
            <p>Coming soon!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
  );
}

export default App;

// using React Router
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <div>
//           <ul>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//           <Routes>
//             <Route path="/about" element={<UseStatePage />} />
//             <Route path="/users" element={<UseStatePage />} />
//             <Route path="/contact" element={<UseStatePage />} />
//           </Routes>
//         </div>
//       </Router>
//     </div>
//   );
// }

// Using hookrouter
// function App() {
//   const routes = {
//     "/user": () => <useStatePage />,
//     "/about": () => <useStatePage />,
//     "/contact": () => <useStatePage />,
//   };
//   const routeResult = useRoutes(routes);
//   return (
//     <div>
//       <A href="/user">Users Page</A>
//       <A href="/about">About Page</A>
//       <A href="/contact">Contacts Page</A>
//       {routeResult}
//     </div>
//   );
// }
