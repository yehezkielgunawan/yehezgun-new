import { Heading, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { convertToId, convertToIdLink } from "functions/helpers/conterToIdLink";

type HeadingLinkProps = {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const HeadingLink = ({ children, as }: HeadingLinkProps) => {
  const router = useRouter();
  const level = Number((as ?? "h3").split("h")[1]);

  const size: Record<number, string> = {
    1: "2xl",
    2: "xl",
    3: "lg",
    4: "md",
    5: "sm",
    6: "xs",
  };

  return (
    <Link
      href={convertToIdLink(router.asPath, String(children))}
    >
      <Heading
        as={as}
        size={size[level]}
        id={convertToId(String(children))}
        mt={8}
        textDecoration="none"
        _hover={{
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        {children}
      </Heading>
    </Link>
  );
};

export default HeadingLink;
