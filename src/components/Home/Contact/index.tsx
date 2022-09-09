import AnimatedSections from '@/components/AnimatedSection';
import CopyToClipboardBadge from '@/components/CopyToClipboardBadge';
import UrlSocialBadge from '@/components/UrlSocialBadge';
import { Center, Container, Flex, Text, VStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { useTranslation } from 'next-i18next';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSections.Section bgColor="gray.100">
      <Container h="100%" maxW={{ base: 'container.xl', md: 'container.lg' }}>
        <Center h="100%">
          <VStack spacing="50px" width="100%">
            <Text fontSize="2xl" fontWeight="bold">
              {t('contact')}
            </Text>
            <Flex
              gap="20px"
              width="100%"
              flexWrap="wrap"
              flexDirection={{ base: 'column', md: 'row' }}
              justifyContent={{ base: 'flex-start', md: 'center' }}
            >
              <UrlSocialBadge
                variant="light"
                Icon={FaLinkedin}
                url="https://www.linkedin.com/in/darlanhms/"
                label="LinkedIn"
              />
              <UrlSocialBadge
                Icon={FaGithub}
                url="https://github.com/darlanhms"
                label="GitHub"
                variant="light"
              />
              <UrlSocialBadge
                Icon={FaInstagram}
                url="https://www.instagram.com/darlanhms"
                label="Instagram"
                variant="light"
              />
              <CopyToClipboardBadge
                Icon={AiOutlineMail}
                text="darlanhermessjb@hotmail.com"
                label="E-mail"
                variant="light"
              />
            </Flex>
          </VStack>
        </Center>
      </Container>
    </AnimatedSections.Section>
  );
};

export default ContactSection;
