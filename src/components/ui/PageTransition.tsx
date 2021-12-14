import { SlideFade, SlideFadeProps } from "@chakra-ui/react";
import React from "react";

const PageTransition = (props: SlideFadeProps) => {
  return <SlideFade in offsetY="20px" {...props} />;
};

export default PageTransition;
