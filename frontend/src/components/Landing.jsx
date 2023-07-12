import React from "react";
import {
  Heading,
  Input,
  Text,
  Button,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { BiBuildings } from "react-icons/bi";
import Allcryptos from "./Allcryptos";

const Landing = () => {
  return (
    <>
      <Heading>Top crypto exchanges</Heading>
      <br />
      <Text>
        Compare all 190 top exchanges. The list is ranked by trading volume
      </Text>
      <br />
      <Text as={"u"} color={"blue.400"} fontSize={"3xl"}>
        Exchanges
      </Text>
      <hr />
      <InputGroup width={"400px"} margin={"auto"} mt={"30px"}>
        <InputLeftElement
          ml={"10px"}
          pointerEvents="none"
          children={<BiBuildings />}
        />
        <Input
          pl={"60px"}
          placeholder="Find an Exchange"
          borderRadius={"20px"}
        />
        <InputRightElement
          mr={"10px"}
          pointerEvents="none"
          children={<SearchIcon />}
        />
      </InputGroup>
      <br />

      <Allcryptos />
    </>
  );
};

export default Landing;
