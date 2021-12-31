import { Image } from "@chakra-ui/image";
import { Divider, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/skeleton";
import NextImage from "next/image";
import React, { useEffect } from "react";
import { GoPrimitiveDot } from "react-icons/go";

import { useAppToast } from "components/ui/AppToast";
import MetaHead from "components/ui/MetaHead";
import PageTransition from "components/ui/PageTransition";
import PopoverComponent from "components/ui/PopoverComponent";
import Main from "components/wrapper/Main";
import { CHECK_YOUR_CONNECTION_MESSAGE } from "constants/baseConfig";
import { contactList } from "constants/contactList";
import { getAllExperiences } from "functions/services/fetcher";
import { Experiences } from "functions/services/types";

export async function getStaticProps() {
  const experienceList = await getAllExperiences();

  return {
    props: {
      experienceList,
    },
    revalidate: 30,
  };
}

function AboutMe({ experienceList }: { experienceList: Experiences }) {
  const toast = useAppToast();
  const dataExperiences = experienceList ?? [];

  useEffect(() => {
    if (!experienceList) {
      toast({
        status: "warning",
        description: CHECK_YOUR_CONNECTION_MESSAGE,
      });
    }
  }, [experienceList, toast]);

  return (
    <PageTransition>
      <Main>
        <MetaHead
          pageTitle="About Me"
          pageDesc="A little description about me."
          route="aboutme"
          isArticle={true}
        />
        <Flex justifyContent="space-between" gridGap={[4, 8]} align="center">
          <Stack spacing={[3, 4]}>
            <Heading as="h5" size="lg">
              Yo, hi there!
            </Heading>
            <Box display={["block", "none"]}>
              <NextImage
                src="/assets/yehez-profile.png"
                width={400}
                height={250}
                layout="responsive"
                alt="Picture of me"
              />
            </Box>
            <Text textAlign="justify" fontSize={["sm", "md"]}>
              I&apos;m Yehezkiel Gunawan, a frontend engineer. You can call me Yehez.
              Recently, I&apos;m learning React and its libraries. To sharpen my
              skills, I usually push myself make some mini projects using a
              library or framework that I want to master and publish it here.
              Sometimes, I also write an article to explain the process behind
              it.
            </Text>
            <Text textAlign="justify" fontSize={["sm", "md"]}>
              Besides of programming things, I like to explore some new tech
              stuff, playing games sometimes, and watching animes.
            </Text>
            <Text fontSize="xs" textAlign="justify">
              <i>
                Fun Fact: Actually, I&apos;m still struggling with native CSS
                even I&apos;m a frontend engineer, LOL.
              </i>
            </Text>
          </Stack>
          <Image
            src="/assets/yehez-profile.png"
            objectFit="contain"
            w="40%"
            borderRadius={4}
            loading="lazy"
            alt="photo-profile"
            display={["none", "flex"]}
          />
        </Flex>

        <Flex gridGap={3} wrap="wrap">
          {contactList.map((contact, index) => (
            <PopoverComponent
              key={index}
              boxIcon={contact.icon}
              description={contact.name}
              url={contact.link_route}
              isSimple={true}
            />
          ))}
        </Flex>

        <Divider borderWidth={2} />
        <Stack spacing={4} py={4}>
          <Heading as="h5">Work Experiences</Heading>
          {dataExperiences.map((experience, index) => {
            return (
              <Skeleton key={index} isLoaded={experience ? true : false}>
                <Flex gridGap={3} align="center">
                  <GoPrimitiveDot />
                  <Stack spacing={2}>
                    <Text fontSize="md">
                      💼 <b>{experience.fields.name}</b>
                    </Text>
                    <Text fontSize="sm">
                      🏢 {experience.fields.company_name}
                    </Text>
                    <Text fontSize="md">
                      ⌛{" "}
                      <b>
                        <i>{experience.fields.duration}</i>
                      </b>
                    </Text>
                  </Stack>
                </Flex>
                <Divider />
              </Skeleton>
            );
          })}
        </Stack>
      </Main>
    </PageTransition>
  );
}

export default AboutMe;
