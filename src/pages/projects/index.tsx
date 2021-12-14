import { Heading, Skeleton, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

import { useAppToast } from "components/ui/AppToast";
import MetaHead from "components/ui/MetaHead";
import PageTransition from "components/ui/PageTransition";
import ProjectCard from "components/ui/ProjectCard";
import Main from "components/wrapper/Main";
import { CHECK_YOUR_CONNECTION_MESSAGE } from "constants/baseConfig";
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
            <ProjectCard
              projectName={project.fields.project_title}
              projectDesc={project.fields.description}
              projectUrl={project.fields.project_url}
              projectImg={
                project.fields.image_url && project.fields.image_url[1].url
              }
              madeUsing={project.fields.made_using}
            />
          </Skeleton>
        ))}
      </Main>
    </PageTransition>
  );
}

export default ProjectsPage;
