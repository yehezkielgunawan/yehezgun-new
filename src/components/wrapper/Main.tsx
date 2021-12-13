import { Stack } from "@chakra-ui/layout";
import React, { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <Stack
      width="100%"
      maxWidth="48rem"
      pt="4rem"
      px={[3, 1]}
      mt={8}
      spacing={4}
    >
      {children}
    </Stack>
  );
};

export default Main;
