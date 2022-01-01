import { Flex, Heading, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Skeleton } from "@chakra-ui/skeleton";
import React, { useEffect, useState } from "react";

import { useAppToast } from "components/ui/AppToast";
import ArticleList from "components/ui/ArticleList";
import MetaHead from "components/ui/MetaHead";
import PageTransition from "components/ui/PageTransition";
import Main from "components/wrapper/Main";
import { CHECK_YOUR_CONNECTION_MESSAGE } from "constants/baseConfig";
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

      <PageTransition>
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
              <ArticleList
                slug={article.fields.slug}
                articleImg={
                  article.fields.article_image &&
                  article.fields.article_image[0].url
                }
                title={article.fields.title}
                publishedDate={article.fields.date}
              />
            </Skeleton>
          ))}
      </PageTransition>
    </Main>
  );
}

export default Articles;
