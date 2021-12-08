import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

const PostLoader = () => {
  return (
    <Stack spacing={2}>
      <Skeleton h="200px" />
      <Skeleton h="50px" />
      <Skeleton h="50px" />
    </Stack>
  );
};

export default PostLoader;
