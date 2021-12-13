import { Box, Flex, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";

import { DEFAULT_IMG_ARTICLE } from "constants/baseConfig";
import { formatDate } from "functions/helpers/formatDate";

import { LinkComponent } from "./LinkComponent";

type ArticleListProps = {
  slug: string;
  articleImg?: string;
  title: string;
  publishedDate: string;
};

const ArticleList = ({
  slug,
  articleImg,
  title,
  publishedDate,
}: ArticleListProps) => {
  return (
    <Box
      _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
      transition="all 0.3s"
      transition-timing-function="spring(1 100 10 10)"
      p={4}
      overflow="hidden"
      borderRadius={10}
      borderWidth={2}
      my={3}
    >
      <LinkComponent href={`/articles/${slug}`} isExternal={false}>
        <Flex as="a" gridGap={4} align="center">
          <Img
            src={articleImg ?? DEFAULT_IMG_ARTICLE}
            objectFit="contain"
            boxSize={["100px", "140px"]}
            align="center"
            loading="lazy"
          />

          <Stack spacing={2}>
            <Text fontSize={["lg", "xl"]}>
              <b>{title}</b>
            </Text>
            <Text>{formatDate(publishedDate)}</Text>
          </Stack>
        </Flex>
      </LinkComponent>
    </Box>
  );
};

export default ArticleList;
