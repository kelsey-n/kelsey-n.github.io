import { HStack, Button, ButtonGroup } from "@chakra-ui/react";

import "./styles.css";

function ButtonNav() {
  return (
    <ButtonGroup variant="outline" spacing={0}>
      <Button colorScheme={"teal"}>Simple</Button>
      <Button colorScheme={"teal"}>In Data Viz</Button>
    </ButtonGroup>
  );
}

export default ButtonNav;
