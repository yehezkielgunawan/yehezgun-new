import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode } from "react";
type LinkProps = {
  href: string;
  isExternal: boolean;
  children: ReactNode;
};
export const LinkComponent = ({ href, children, isExternal }: LinkProps) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink as={NextLink} isExternal={isExternal}>
        {children}
      </ChakraLink>
    </NextLink>
  );
};
