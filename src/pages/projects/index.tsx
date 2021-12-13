import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Image,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

import { useAppToast } from "components/ui/AppToast";
import { LinkComponent } from "components/ui/LinkComponent";
import MetaHead from "components/ui/MetaHead";
import PageTransition from "components/ui/PageTransition";
import Main from "components/wrapper/Main";
import {
  CHECK_YOUR_CONNECTION_MESSAGE,
  DEFAULT_IMG,
} from "constants/baseConfig";
import { getAllProjectsTable } from "functions/services/fetcher";
import { Projects as ProjectListType } from "functions/services/types";

export async function getStaticProps() {
  const projectList = await getAllProjectsTable();

  return {
    props: {
      projectList,
    },
    revalidate: 30,
  };
}

function ProjectsPage({ projectList }: { projectList: ProjectListType }) {
  const toast = useAppToast();
  const dataProjects = projectList ?? [];

  useEffect(() => {
    if (!projectList) {
      toast({
        status: "warning",
        description: CHECK_YOUR_CONNECTION_MESSAGE,
      });
    }
  }, [projectList, toast]);

  return (
    <PageTransition>
      <Main>
        <MetaHead
          pageTitle="Projects"
          pageDesc="This is my personal projects that I've done before."
          route="projects"
          isArticle={false}
        />
        <Heading as="h5" size="xl">
          <b>Projects</b>
        </Heading>
        <Text fontSize="lg">
          This is my previous works, personal (experiment), and freelance{" "}
          <i> (if it&apos;s a public project) </i> project list.
        </Text>

        {dataProjects.map((project, index) => (
          <Skeleton
            key={index}
            isLoaded={dataProjects.length > 0 ? true : false}
          >
            <LinkComponent isExternal={true} href={project.fields.project_url}>
              <Box
                _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
                transition="all 0.3s"
                transition-timing-function="spring(1 100 10 10)"
                p={4}
                overflow="hidden"
                borderRadius={10}
                borderWidth={2}
                w="100%"
              >
                <Stack spacing={3} px={3}>
                  <Flex justifyContent="space-between">
                    <Text fontSize={["lg", "xl"]}>
                      <b>{project.fields.project_title}</b>
                    </Text>
                    <ExternalLinkIcon fontSize="lg" />
                  </Flex>
                  <Flex
                    gridGap={2}
                    align="center"
                    justifyContent="space-between"
                  >
                    <Stack spacing={3}>
                      <Text fontSize={["md", "lg"]}>
                        {project.fields.description}
                      </Text>
                      <Flex gridGap={2}>
                        {project.fields.made_using.map(
                          (framework, frameworkIndex) => (
                            <Image
                              key={frameworkIndex}
                              src={framework.url}
                              rounded="lg"
                              boxSize="40px"
                              fit="contain"
                              alt="stack-images"
                            />
                          )
                        )}
                      </Flex>
                    </Stack>
                    <Image
                      alt="project-image"
                      src={
                        project.fields.image_url
                          ? project.fields.image_url[1].url
                          : DEFAULT_IMG
                      }
                      objectFit="cover"
                      boxSize={["100px", "120px"]}
                      align="center"
                      rounded="2xl"
                    />
                  </Flex>
                </Stack>
              </Box>
            </LinkComponent>
          </Skeleton>
        ))}
      </Main>
    </PageTransition>
  );
}

export default ProjectsPage;
