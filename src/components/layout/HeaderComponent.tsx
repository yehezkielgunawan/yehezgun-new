import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { useRouter } from "next/dist/client/router";
import React from "react";

import { LinkComponent } from "components/ui/LinkComponent";
import { menuList } from "constants/menuList";

import DarkModeSwitch from "./DarkModeSwitch";

const HeaderComponent = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  return (
    <Box
      justifyContent="start"
      bg={colorMode === "light" ? "white" : "gray.700"}
      position="fixed"
      width="100%"
      opacity="0.95"
      top={0}
      zIndex={5}
      transition="0.3s ease-out"
    >
      <Flex
        justifyContent="space-between"
        py={2}
        align="center"
        maxW="48rem"
        mx="auto"
        px={[3, 1]}
      >
        <Text as="a" href="/" fontSize="lg">
          <b>yehezgun.com</b>
        </Text>

        <Flex gridGap={3} align="center" display={["none", "flex"]}>
          {menuList.map((menu, index) => (
            <LinkComponent key={index} href={menu.route}>
              <Text
                as="a"
                fontSize="md"
                _hover={{
                  color: "gray.500",
                }}
                color={router.pathname === menu.route ? "gray.500" : ""}
                cursor="pointer"
              >
                <b>{menu.label}</b>
              </Text>
            </LinkComponent>
          ))}
          <DarkModeSwitch />
        </Flex>

        <Flex gridGap={3} alignItems="center" display={["flex", "none"]}>
          <DarkModeSwitch />
          <Menu autoSelect={false}>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              {menuList.map((menu, index) => (
                <LinkComponent key={index} href={menu.route}>
                  <MenuItem
                    as="a"
                    _hover={{
                      bg: "gray.500",
                    }}
                    bg={router.pathname === menu.route ? "gray.500" : ""}
                  >
                    <Text fontSize="md">
                      <b>{menu.label}</b>
                    </Text>
                  </MenuItem>
                </LinkComponent>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeaderComponent;
