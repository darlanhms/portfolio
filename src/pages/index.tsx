/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Head from 'next/head';
import AnimatedSections from '@/components/AminatedSection';
import { Center, Flex, Grid, GridItem, HStack, Text, VStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePic from '@/assets/images/profile.jpg';
import SocialBadge from '@/components/SocialBadge';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Darlan Hermes</title>
      </Head>
      <AnimatedSections.Container bgColor="blackAlpha.800">
        <AnimatedSections.Section>
          <Center h="100%" w="100%">
            <VStack spacing="100px">
              <Grid templateColumns="400px 300px" gap="50px">
                <GridItem>
                  <Flex alignItems="center" h="100%" color="white" textAlign="start">
                    <VStack align="flex-start">
                      <Text fontSize="2xl" fontWeight="bold">
                        Hi, I'm Darlan Hermes 👋
                      </Text>
                      <Text>
                        A self-taught full stack software developer who focus on web-related technologies like
                        Typescript, Javascript, Node and React
                      </Text>
                    </VStack>
                  </Flex>
                </GridItem>
                <GridItem>
                  <Center>
                    <img
                      style={{
                        borderRadius: '50%',
                        boxShadow:
                          '0 0 1px 1px rgb(0 0 0 / 13%), 0 0 2px 2px rgb(0 0 0 / 13%), 0 0 7px -4px rgb(0 0 0 / 13%), 0 0 18px 7px rgb(0 0 0 / 13%), 0 0 16px 2px rgb(0 0 0 / 13%)',
                      }}
                      src={profilePic.src}
                      width="200px"
                      height="200px"
                    />
                  </Center>
                </GridItem>
              </Grid>
              <HStack spacing={5}>
                <SocialBadge Icon={FaLinkedin} url="https://www.linkedin.com/in/darlanhms/" label="LinkedIn" />
                <SocialBadge Icon={FaGithub} url="https://github.com/darlanhms" label="GitHub" />
              </HStack>
            </VStack>
          </Center>
        </AnimatedSections.Section>
      </AnimatedSections.Container>
    </>
  );
};

export default Home;
