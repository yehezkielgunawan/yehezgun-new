import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

import { DEFAULT_IMG } from "constants/baseConfig";
import { SingleProjectImg } from "functions/services/types";

import { LinkComponent } from "./LinkComponent";

type ProjectCardProps = {
  projectName: string;
  projectDesc: string;
  madeUsing: Array<SingleProjectImg>;
  projectImg?: string;
  projectUrl: string;
};

const ProjectCard = ({
  projectName,
  projectDesc,
  madeUsing,
  projectImg,
  projectUrl,
}: ProjectCardProps) => {
  return (
    <LinkComponent isExternal={true} href={projectUrl}>
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
              <b>{projectName}</b>
            </Text>
            <ExternalLinkIcon fontSize="lg" />
          </Flex>
          <Flex gridGap={2} align="center" justifyContent="space-between">
            <Stack spacing={3}>
              <Text fontSize={["md", "lg"]}>{projectDesc}</Text>
              <Flex gridGap={2}>
                {madeUsing.map((framework, frameworkIndex) => (
                  <Image
                    key={frameworkIndex}
                    src={framework.url}
                    rounded="lg"
                    boxSize="40px"
                    fit="contain"
                    alt="stack-images"
                  />
                ))}
              </Flex>
            </Stack>
            <Image
              alt="project-image"
              src={projectImg ?? DEFAULT_IMG}
              objectFit="cover"
              boxSize={["100px", "120px"]}
              align="center"
              rounded="2xl"
            />
          </Flex>
        </Stack>
      </Box>
    </LinkComponent>
  );
};

export default ProjectCard;
