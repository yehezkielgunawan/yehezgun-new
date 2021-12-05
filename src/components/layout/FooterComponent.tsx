import { Text, Link as ChakraLink, Flex, Button } from "@chakra-ui/react";
import React from "react";

import Footer from "components/wrapper/Footer";
import { specialItems } from "constants/contactList";

const FooterComponent = () => (
  <Footer>
    <Text>
      <ChakraLink isExternal href="https://yehezgun.com">
        {new Date().getFullYear()} | Yehezkiel Gunawan
      </ChakraLink>
    </Text>
    <Flex gridGap={4}>
      {specialItems.map((item, index) => (
        <ChakraLink isExternal href={item.link_route} key={index}>
          <Button variant="ghost" leftIcon={<item.icon />}>
            {item.name}
          </Button>
        </ChakraLink>
      ))}
    </Flex>
  </Footer>
);

export default FooterComponent;
