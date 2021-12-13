import { SlideFade, SlideFadeProps } from "@chakra-ui/react";
import React from "react";

const PageTransition = (props: SlideFadeProps) => {
  return <SlideFade in {...props} />;
};

export default PageTransition;
