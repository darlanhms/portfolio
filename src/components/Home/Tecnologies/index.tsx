import AnimatedSections from '@/components/AminatedSection';
import {
  Center,
  CircularProgress,
  CircularProgressLabel,
  Container,
  Grid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaReact, FaDocker, FaAws, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiKubernetes, SiFlutter } from 'react-icons/si';

interface IndividualTechnologyProps {
  name: string;
  progress: number;
}

const IndividualTechnology: React.FC<React.PropsWithChildren<IndividualTechnologyProps>> = ({
  children,
  name,
  progress,
}) => {
  return (
    <Center flexDirection="column" color="gray.700">
      <CircularProgress color="gray.700" value={progress} size="70px" thickness="6px">
        <CircularProgressLabel display="flex" justifyContent="center" alignItems="center">
          {children}
        </CircularProgressLabel>
      </CircularProgress>
      <Text mt={2} fontWeight="500" textAlign="center">
        {name}
      </Text>
    </Center>
  );
};

const TechnologiesSection: React.FC = () => {
  return (
    <AnimatedSections.Section bgColor="gray.100">
      <Container h="100%" maxW={{ base: 'container.xl', md: 'container.lg' }}>
        <Center h="100%">
          <VStack spacing="50px">
            <Text fontSize="2xl" fontWeight="bold">
              Technologies
            </Text>
            <Grid w="100%" templateColumns="repeat(3, 1fr)" gap={{ base: '30px', md: '50px' }}>
              <IndividualTechnology progress={100} name="Typescript">
                <SiTypescript size={30} />
              </IndividualTechnology>
              <IndividualTechnology progress={100} name="Javascript">
                <SiJavascript size={30} />
              </IndividualTechnology>
              <IndividualTechnology progress={100} name="Node">
                <FaNodeJs size={30} />
              </IndividualTechnology>
              <IndividualTechnology progress={100} name="React">
                <FaReact size={30} />
              </IndividualTechnology>
              <IndividualTechnology progress={85} name="React Native">
                <FaReact size={30} />
              </IndividualTechnology>
              <IndividualTechnology progress={15} name="Flutter">
                <SiFlutter size={30} />
              </IndividualTechnology>
              <IndividualTechnology progress={80} name="Docker">
                <FaDocker size={30} />
              </IndividualTechnology>
              <IndividualTechnology progress={50} name="AWS">
                <FaAws size={30} />
              </IndividualTechnology>
              <IndividualTechnology progress={15} name="Kubernetes">
                <SiKubernetes size={30} />
              </IndividualTechnology>
            </Grid>
          </VStack>
        </Center>
      </Container>
    </AnimatedSections.Section>
  );
};

export default TechnologiesSection;
