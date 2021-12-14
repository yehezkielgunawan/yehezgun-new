/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Button, Divider, Heading, Img, Stack, Text } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import NextLink from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import { newTheme } from "components/markdown/md-theme";
import MetaHead from "components/ui/MetaHead";
import PostLoader from "components/ui/PostLoader";
import Main from "components/wrapper/Main";
import { DEFAULT_IMG_ARTICLE } from "constants/baseConfig";
import { formatDate } from "functions/helpers/formatDate";
import { getArticleList, getArticlePost } from "functions/services/fetcher";
import { SingleArticle, SingleRes } from "functions/services/types";

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const postData = await getArticlePost(slug).then((res) => res[0]);

  return {
    props: {
      postData,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const table = await getArticleList();
  return {
    paths: table.map((row) => {
      return {
        params: {
          id: row.id,
          slug: row.fields.slug
        }
      }
    }),
    fallback: false,
  };
}

const Post = ({ postData }: { postData: SingleRes<SingleArticle> }) => {
  if (!postData) {
    <PostLoader />;
  }

  return (
    <Main>
      <MetaHead
        pageTitle={postData.fields.title}
        pageDesc="Yehezkiel Gunawan's Article Post"
        route={`articles/${postData.fields.slug}`}
        isArticle={true}
      />
      <Stack spacing={3}>
        <Img
          alt="article-img"
          src={
            postData.fields.article_image
              ? postData.fields.article_image[0].url
              : DEFAULT_IMG_ARTICLE
          }
          w="100%"
          h="auto"
          loading="lazy"
        />
        <Heading as="h1" fontSize="2xl">
          <b>{postData.fields.title}</b>
        </Heading>
        <Text fontSize="sm">
          Published on {formatDate(postData.fields.date)}
        </Text>
        <Divider />
      </Stack>
      <ReactMarkdown
        components={ChakraUIRenderer(newTheme)}
        children={postData.fields.content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeAutolinkHeadings]}
      />
      <NextLink href="/articles" passHref>
        <Button leftIcon={<ChevronLeftIcon />}>Go Back</Button>
      </NextLink>
    </Main>
  );
};

export default Post;
