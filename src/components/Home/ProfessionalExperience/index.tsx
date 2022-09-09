/* eslint-disable react/no-unescaped-entities */
import AnimatedSections from '@/components/AminatedSection';
import {
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import pedidos10Logo from '@/assets/images/pedidos10.jpg';
import sclLogo from '@/assets/images/scl.jpg';

interface IndividualExperienceProps {
  name: string;
  description: React.ReactElement;
  range: string;
  image: string;
}

const IndividualExperience: React.FC<IndividualExperienceProps> = ({ name, description, range, image }) => {
  return (
    <Grid gap="20px" templateColumns="3fr 10fr">
      <GridItem>
        <Flex justifyContent="center">
          <img
            style={{ borderRadius: '10px', border: '3px solid white' }}
            src={image}
            width={150}
            height={150}
          />
        </Flex>
      </GridItem>
      <GridItem>
        <VStack spacing={2} align="flex-start">
          <Text fontSize="xl" fontWeight={600}>
            {name}
          </Text>
          <Text fontWeight="600">{range}</Text>
          {description}
        </VStack>
      </GridItem>
    </Grid>
  );
};

const ProfessionalExperienceSection: React.FC = () => {
  return (
    <AnimatedSections.Section bgColor="gray.700" height="auto">
      <Container h="100%" maxW={{ base: 'container.xl', md: 'container.lg' }} color="white">
        <Center h="100%">
          <VStack spacing="50px">
            <Text fontSize="2xl" fontWeight="bold">
              Professional experience
            </Text>
            <VStack spacing={8}>
              <IndividualExperience
                name="Pedidos10"
                range="Jan 2021 - Present"
                image={pedidos10Logo.src}
                description={
                  <>
                    <Text fontSize="sm">
                      Pedidos10 is a technology company that focuses on deliveries of all kinds. It stands out
                      in the market since it offers top-notch solutions for any need that a restaurant, bar,
                      supermarket, or other type of delivery business has.
                    </Text>
                    <Text>Main assignments:</Text>
                    <UnorderedList spacing={1} fontSize="sm">
                      <ListItem>
                        Made architectural and structural decisions to develop a product from scratch (Point of
                        Sale - POS).
                      </ListItem>
                      <ListItem>
                        Developed a RESTful API using Typescript, Node.js (Express), DDD, with a substantial
                        test coverage, including unit tests and E2E.
                      </ListItem>
                      <ListItem>
                        Developed a control panel using React, Typescript and GraphQL to manage POS key
                        information.
                      </ListItem>
                      <ListItem>
                        Developed the POS platform using Electron, React, Typescript, GraphQL.
                      </ListItem>
                    </UnorderedList>
                  </>
                }
              />
              <IndividualExperience
                name="SCL Engenharia de Software LTDA"
                range="May 2019 - Jan 2021"
                image={sclLogo.src}
                description={
                  <>
                    <Text fontSize="sm">
                      SCL is a technology company that focuses on local shoe companies providing tools for their
                      operational needs. My experience mostly involved agents tools, including those that helped
                      them to increase sales and organize their customers and overall operation.
                    </Text>
                    <Text>Main assignments:</Text>
                    <UnorderedList spacing={1} fontSize="sm">
                      <ListItem>Maintained a legacy vanilla JS mobile app.</ListItem>
                      <ListItem>Developed a B2B platform with vanilla JS.</ListItem>
                      <ListItem>Developed RESTful API's using Node.js (Loopback 3) and RethinkDB.</ListItem>
                      <ListItem>
                        Developed a shoe trade show platform using Typescript and React framework, including an
                        integration with the B2B platform.
                      </ListItem>
                      <ListItem>
                        Maintained a React Native app which is used by Maroma Sorvetes' agents to make sales to
                        local stores.
                      </ListItem>
                    </UnorderedList>
                  </>
                }
              />
            </VStack>
          </VStack>
        </Center>
      </Container>
    </AnimatedSections.Section>
  );
};

export default ProfessionalExperienceSection;
