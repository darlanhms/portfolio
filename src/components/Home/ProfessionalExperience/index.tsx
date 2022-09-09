/* eslint-disable react/no-unescaped-entities */
import AnimatedSections from '@/components/AnimatedSection';
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
import { useTranslation } from 'next-i18next';

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
  const { t } = useTranslation();

  return (
    <AnimatedSections.Section bgColor="gray.700" height="auto">
      <Container h="100%" maxW={{ base: 'container.xl', md: 'container.lg' }} color="white">
        <Center h="100%">
          <VStack spacing="50px">
            <Text fontSize="2xl" fontWeight="bold">
              {t('professionalExperience')}
            </Text>
            <VStack spacing={8}>
              <IndividualExperience
                name="Pedidos10"
                range={t('pedidos10Range')}
                image={pedidos10Logo.src}
                description={
                  <>
                    <Text fontSize="sm">{t('pedidos10Desc')}</Text>
                    <Text>{t('mainAssignments')}:</Text>
                    <UnorderedList spacing={1} fontSize="sm">
                      <ListItem>{t('pedidos10Attr1')}</ListItem>
                      <ListItem>{t('pedidos10Attr2')}</ListItem>
                      <ListItem>{t('pedidos10Attr3')}</ListItem>
                      <ListItem>{t('pedidos10Attr4')}</ListItem>
                    </UnorderedList>
                  </>
                }
              />
              <IndividualExperience
                name="SCL Engenharia de Software LTDA"
                range={t('sclRange')}
                image={sclLogo.src}
                description={
                  <>
                    <Text fontSize="sm">{t('sclDesc')}</Text>
                    <Text>{t('mainAssignments')}:</Text>
                    <UnorderedList spacing={1} fontSize="sm">
                      <ListItem>{t('sclAttr1')}</ListItem>
                      <ListItem>{t('sclAttr2')}</ListItem>
                      <ListItem>{t('sclAttr3')}</ListItem>
                      <ListItem>{t('sclAttr4')}</ListItem>
                      <ListItem>{t('sclAttr5')}</ListItem>
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
