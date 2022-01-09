import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Popover placement="bottom" trigger="hover">
      <PopoverTrigger>
        <IconButton
          borderRadius="full"
          aria-label="Sun"
          icon={isDark ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />
      </PopoverTrigger>
      <PopoverContent maxW="8rem">
        <PopoverArrow />
        <PopoverHeader textAlign="center" fontWeight="semibold">
          Theme Toggle
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
};

export default DarkModeSwitch;
