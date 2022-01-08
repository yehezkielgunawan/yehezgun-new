import Icon from "@chakra-ui/icon";
import {
  Box,
  Flex,
  Link as ChakraLink,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { FaExternalLinkAlt } from "react-icons/fa";

type PopoverComponentProps = {
  boxIcon: IconType;
  description: string;
  url: string;
  isSimple: boolean;
};

const PopoverComponent = ({
  boxIcon,
  description,
  url,
  isSimple,
}: PopoverComponentProps) => {
  return (
    <>
      <Popover placement="top" trigger="hover">
        <PopoverTrigger>
          <Box as="button">
            <Icon
              _hover={{
                color: "gray.500",
              }}
              as={boxIcon}
              fontSize="4xl"
            />
          </Box>
        </PopoverTrigger>
        <PopoverContent maxW={isSimple ? "10rem" : "auto"}>
          <PopoverArrow />
          <PopoverCloseButton />
          {isSimple && (
            <PopoverHeader textAlign="center" fontWeight="semibold">
              {description}
            </PopoverHeader>
          )}
          {!isSimple && <PopoverBody>{description}</PopoverBody>}
          {!isSimple && (
            <PopoverFooter>
              <ChakraLink textColor="blue.400" isExternal href={url}>
                <Flex gridGap={2} align="center">
                  Go to the official docs site. <FaExternalLinkAlt />
                </Flex>
              </ChakraLink>
            </PopoverFooter>
          )}
        </PopoverContent>
      </Popover>
    </>
  );
};

export default PopoverComponent;
