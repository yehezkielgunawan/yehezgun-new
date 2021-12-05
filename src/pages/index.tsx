import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Img,
  Link as ChakraLink,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useEffect } from "react";

import { useAppToast } from "components/ui/AppToast";
import PopoverComponent from "components/ui/PopoverComponent";
import Main from "components/wrapper/Main";
import {
  CHECK_YOUR_CONNECTION_MESSAGE,
  DEFAULT_IMG,
} from "constants/baseConfig";
import { techStackList } from "constants/techStacks";
import { getAllProjectsTable } from "functions/services/fetcher";
import { Projects } from "functions/services/types";

export async function getStaticProps() {
  const projectList = await getAllProjectsTable();
  const newestProjects = projectList.slice(0, 2);

  return {
    props: {
      // newProjectList,
      newestProjects,
    },
    revalidate: 30,
  };
}

const Index = ({ newestProjects }: { newestProjects: Projects }) => {
  const toast = useAppToast();
  const dataProjects = newestProjects ?? [];

  useEffect(() => {
    if (!newestProjects) {
      toast({
        status: "warning",
        description: CHECK_YOUR_CONNECTION_MESSAGE,
      });
    }
  }, [newestProjects, toast]);

  return (
    <Main>
      <Flex justifyContent="space-between" align="center" gridGap={4}>
        <Stack spacing={2}>
          <Heading as="h5" size="xl">
            <b>Hi, I&apos;m Yehezkiel Gunawan.</b>
          </Heading>

          <Text fontSize="lg" textAlign="justify">
            Currently work as a frontend developer.
            <br />
            You&apos;ve found my personal slice of the internet. Take a look and
            enjoy.
          </Text>
        </Stack>
        <Image
          src="assets/peep.png"
          w="30%"
          objectFit="contain"
          loading="lazy"
          alt="yehez-avatar"
          borderRadius="full"
          display={["none", "flex"]}
        />
      </Flex>

      <Stack py={6} spacing={2}>
        <Text fontSize="xl">
          <b>Current Favourite Tech Stacks</b>
        </Text>
        <Flex gridGap={4} wrap="wrap">
          {techStackList.map((techStack, index) => (
            <PopoverComponent
              key={index}
              boxIcon={techStack.icon}
              description={techStack.description}
              url={techStack.footer_url}
              isSimple={false}
            />
          ))}
        </Flex>
      </Stack>

      <Stack spacing={3} pt={6}>
        <Text fontSize="xl">
          <b>Newest Projects</b>
        </Text>
        <SimpleGrid columns={[1, null, 2]} spacing={3}>
          {dataProjects.map((project, index) => {
            return (
              <Skeleton key={index} isLoaded={dataProjects ? true : false}>
                <ChakraLink isExternal href={project.fields.project_url}>
                  <Box
                    p={1}
                    overflow="hidden"
                    borderRadius={10}
                    borderWidth={2}
                    _hover={{
                      bg: "gray.500",
                    }}
                  >
                    <Stack spacing={3} align="center">
                      <Text textAlign="center" fontSize="lg">
                        <b>{project.fields.project_title}</b>
                        <ExternalLinkIcon pl={1} />
                      </Text>
                      <Divider />
                      <Img
                        src={
                          project.fields.image_url
                            ? project.fields.image_url[0].url
                            : DEFAULT_IMG
                        }
                        objectFit="contain"
                        w="100%"
                        h="150px"
                        align="center"
                      />
                    </Stack>
                  </Box>
                </ChakraLink>
              </Skeleton>
            );
          })}
        </SimpleGrid>

        <NextLink href="/projects" passHref>
          <Button as="a" variant="outline">
            See More Projects
          </Button>
        </NextLink>
      </Stack>
    </Main>
  );
};

export default Index;
