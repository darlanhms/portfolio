import AnimatedSections from '@/components/AnimatedSection';
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
import { IconType } from 'react-icons';
import { useTranslation } from 'next-i18next';

interface IndividualTechnologyProps {
  name: string;
  progress: number;
  Icon: IconType;
}

const IndividualTechnology: React.FC<React.PropsWithChildren<IndividualTechnologyProps>> = ({
  name,
  progress,
  Icon,
}) => {
  return (
    <Center flexDirection="column" color="gray.700">
      <CircularProgress color="gray.700" value={progress} size="70px" thickness="6px">
        <CircularProgressLabel display="flex" justifyContent="center" alignItems="center">
          <Icon size={30} />
        </CircularProgressLabel>
      </CircularProgress>
      <Text mt={2} fontWeight="500" textAlign="center">
        {name}
      </Text>
    </Center>
  );
};

const TechnologiesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSections.Section bgColor="gray.100">
      <Container h="100%" maxW={{ base: 'container.xl', md: 'container.lg' }}>
        <Center h="100%">
          <VStack spacing="50px">
            <Text fontSize="2xl" fontWeight="bold">
              {t('technologies')}
            </Text>
            <Grid w="100%" templateColumns="repeat(3, 1fr)" gap={{ base: '30px', md: '50px' }}>
              <IndividualTechnology progress={100} name="Typescript" Icon={SiTypescript} />
              <IndividualTechnology progress={100} name="Javascript" Icon={SiJavascript} />
              <IndividualTechnology progress={100} name="Node" Icon={FaNodeJs} />
              <IndividualTechnology progress={100} name="React" Icon={FaReact} />
              <IndividualTechnology progress={85} name="React Native" Icon={FaReact} />
              <IndividualTechnology progress={15} name="Flutter" Icon={SiFlutter} />
              <IndividualTechnology progress={80} name="Docker" Icon={FaDocker} />
              <IndividualTechnology progress={50} name="AWS" Icon={FaAws} />
              <IndividualTechnology progress={15} name="Kubernetes" Icon={SiKubernetes} />
            </Grid>
          </VStack>
        </Center>
      </Container>
    </AnimatedSections.Section>
  );
};

export default TechnologiesSection;
