import { Img } from "@chakra-ui/image";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Skeleton } from "@chakra-ui/skeleton";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";

import { useAppToast } from "components/ui/AppToast";
import MetaHead from "components/ui/MetaHead";
import Main from "components/wrapper/Main";
import {
  CHECK_YOUR_CONNECTION_MESSAGE,
  DEFAULT_IMG_ARTICLE,
} from "constants/baseConfig";
import { formatDate } from "functions/helpers/formatDate";
import { getArticleList } from "functions/services/fetcher";
import {
  Articles as ArticlesType,
  SingleArticleInList,
  SingleRes,
} from "functions/services/types";

export async function getStaticProps() {
  const articleList = await getArticleList();

  return {
    props: {
      articleList,
    },
    revalidate: 30,
  };
}

function Articles({ articleList }: { articleList: ArticlesType }) {
  const toast = useAppToast();
  const dataArticles = articleList ?? [];
  const [language, setLanguage] = useState<string>("en");

  const filterByLanguage = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    return setLanguage(e.target.value);
  };

  useEffect(() => {
    if (!articleList) {
      toast({
        status: "warning",
        description: CHECK_YOUR_CONNECTION_MESSAGE,
      });
    }
  }, [articleList, toast]);

  return (
    <Main>
      <MetaHead
        pageTitle="Articles"
        pageDesc="Just some random thoughts."
        route="articles"
        isArticle={false}
      />
      <Heading as="h5" size="xl">
        <b>Articles</b>
      </Heading>
      <Text fontSize="lg">
        Just some random thoughts. For me, writting can sharpen my understanding
        of something.
      </Text>
      <Flex gridGap={4} align="center">
        <Text fontSize="sm">Choose Language</Text>
        <Select defaultValue="en" w="240px" onChange={filterByLanguage}>
          <option value="en">English</option>
          <option value="idn">Indonesian</option>
        </Select>
      </Flex>

      {dataArticles
        .filter(
          (article: SingleRes<SingleArticleInList>) =>
            article.fields.lang === language
        )
        .map((article, index) => (
          <Skeleton
            key={index}
            isLoaded={articleList.length > 0 ? true : false}
          >
            <Box
              _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
              p={4}
              overflow="hidden"
              borderRadius={10}
              borderWidth={2}
            >
              <NextLink
                href={`/articles/${article.fields.slug}`}
                as={`/articles/${article.fields.slug}`}
                passHref
              >
                <Flex as="a" gridGap={4} align="center">
                  <Img
                    src={
                      article.fields.article_image
                        ? article.fields.article_image[0].url
                        : DEFAULT_IMG_ARTICLE
                    }
                    objectFit="contain"
                    boxSize={["100px", "140px"]}
                    align="center"
                    loading="lazy"
                  />

                  <Stack spacing={2}>
                    <Text fontSize={["lg", "xl"]}>
                      <b>{article.fields.title}</b>
                    </Text>
                    <Text>{formatDate(article.fields.date)}</Text>
                  </Stack>
                </Flex>
              </NextLink>
            </Box>
          </Skeleton>
        ))}
    </Main>
  );
}

export default Articles;
