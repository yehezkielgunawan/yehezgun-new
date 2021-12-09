import { Heading, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { convertToId, convertToIdLink } from "functions/helpers/convertToIdLink";

type HeadingLinkProps = {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const HeadingLink = ({ children, as }: HeadingLinkProps) => {
  const router = useRouter();
  const level = Number((as ?? "h3").split("h")[1]);

  const size: Record<number, string> = {
    1: "2rem",
    2: "1.5rem",
    3: "1rem",
    4: "0.75rem",
    5: "0.5rem",
    6: "0.25rem",
  };

  return (
    <Link
      href={convertToIdLink(router.asPath, String(children))}
    >
      <Heading
        as={as}
        fontSize={size[level]}
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
