import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode } from "react";
type LinkProps = {
  href: string;
  children: ReactNode;
};
export const LinkComponent = ({ href, children }: LinkProps) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink>{children}</ChakraLink>
    </NextLink>
  );
};
