import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";

const Footer = (props: FlexProps) => {
  return (
    <Flex
      as="footer"
      my="2rem"
      py={4}
      align="center"
      justify={["center", "center", "space-between"]}
      direction={["column-reverse", "column-reverse", "row"]}
      w="100%"
      maxW="48rem"
      borderTop="1px"
      wrap="wrap"
      gridGap={4}
      {...props}
    />
  );
};

export default Footer;
