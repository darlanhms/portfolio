/* eslint-disable react/no-unescaped-entities */
import AnimatedSections from '@/components/AminatedSection';
import { Center, Container, Flex, Grid, GridItem, Text, VStack, HStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePic from '@/assets/images/profile.jpg';
import SocialBadge from '@/components/SocialBadge';

const PresentationSection: React.FC = () => {
  return (
    <AnimatedSections.Section bgColor="gray.700">
      <Container h="100%" maxW={{ base: 'container.xl', md: 'container.lg' }}>
        <Center h="100%">
          <VStack spacing="100px">
            <Grid
              templateColumns={{ base: '1fr', md: '400px 300px' }}
              templateRows={{ base: '"1fr 1fr"', md: '1fr' }}
              templateAreas={{ base: '"profile" "description"', md: '"description profile"' }}
              gap="50px"
            >
              <GridItem gridArea="description">
                <Flex alignItems="center" h="100%" color="white" textAlign="start">
                  <VStack align="flex-start" spacing="7">
                    <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">
                      Hi, I'm Darlan Hermes 👋
                    </Text>
                    <Text>
                      A self-taught full stack software developer that focus on web-related technologies like
                      Typescript, Javascript, Node and React
                    </Text>
                  </VStack>
                </Flex>
              </GridItem>
              <GridItem gridArea="profile">
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
      </Container>
    </AnimatedSections.Section>
  );
};

export default PresentationSection;
