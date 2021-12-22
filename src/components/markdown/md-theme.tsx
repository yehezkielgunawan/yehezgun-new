/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert } from "@chakra-ui/alert";
import { Button } from "@chakra-ui/button";
import { Box, Code, Flex, Text } from "@chakra-ui/layout";
import { Link, useColorMode, Image } from "@chakra-ui/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import vs from "react-syntax-highlighter/dist/cjs/styles/hljs/vs";

import { useAppToast } from "components/ui/AppToast";

import HeadingLink from "./HeadingLink";

export const newTheme = {
  h1: ({ children }: any) => (
    <HeadingLink as="h1">{String(children)}</HeadingLink>
  ),
  h2: ({ children }: any) => (
    <HeadingLink as="h2">{String(children)}</HeadingLink>
  ),
  h3: ({ children }: any) => (
    <HeadingLink as="h3">{String(children)}</HeadingLink>
  ),
  h4: ({ children }: any) => (
    <HeadingLink as="h4">{String(children)}</HeadingLink>
  ),
  h5: ({ children }: any) => (
    <HeadingLink as="h5">{String(children)}</HeadingLink>
  ),
  h6: ({ children }: any) => (
    <HeadingLink as="h6">{String(children)}</HeadingLink>
  ),
  blockquote: (props: any) => {
    return (
      <Alert
        pb={0}
        status="info"
        variant="left-accent"
        rounded="4px"
        {...props}
      />
    );
  },
  a: (props: any) => {
    const { href } = props;
    return (
      <Link href={href} isExternal={href[0] === "#" ? false : true}>
        <Text
          as="u"
          _hover={
            href[0] === "#"
              ? {
                  border: "2px",
                  borderColor: "blue.500",
                  borderRadius: "md",
                }
              : {
                  border: "2px",
                  borderColor: "green.500",
                  borderRadius: "md",
                }
          }
          cursor={href[0] == "#" ? "pointer" : "ne-resize"}
          {...props}
        />
      </Link>
    );
  },
  code: (props: any) => {
    const toast = useAppToast();
    const { colorMode } = useColorMode();
    const { children, className, inline } = props;
    const language = className?.replace(/language-/, "");
    const childrenValue = String(children).replace(/\n$/, "");
    return !inline ? (
      <Box width="100%">
        <Flex alignItems="center">
          {language && <Code>{language}</Code>}
          <Button
            marginLeft="auto"
            colorScheme="teal"
            height={6}
            padding={0}
            fontSize={12}
            textTransform="lowercase"
            onClick={() => {
              navigator.clipboard.writeText(childrenValue);
              toast({
                status: "success",
                title: "Copied!",
              });
            }}
          >
            Copy
          </Button>
        </Flex>
        <SyntaxHighlighter
          language={language}
          style={colorMode === "light" ? vs.vs : nightOwl}
          showLineNumbers={false}
        >
          {childrenValue}
        </SyntaxHighlighter>
      </Box>
    ) : (
      <Code borderRadius={8} className={className} {...props}>
        {children}
      </Code>
    );
  },
  img: (props: any) => {
    return (
      <Image
        alt="article-image"
        w="100%"
        h="auto"
        htmlWidth="100%"
        htmlHeight="auto"
        loading="lazy"
        {...props}
      />
    );
  },
};
