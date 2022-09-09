import { Flex, Box, BoxProps } from '@chakra-ui/react';
import flags from '@/assets/images/flags.png';
import { useRouter } from 'next/router';

const BrazilFlag: React.FC = () => {
  return <Box background={`url(${flags.src})`} width="16px" height="11px" backgroundPosition="-340px -15px" />;
};

const USAFlag: React.FC = () => {
  return <Box background={`url(${flags.src})`} width="16px" height="11px" backgroundPosition="-360px -300px" />;
};

const BaseI18nOption: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box
      borderWidth="1px"
      px={3}
      py={2}
      transition="0.2s"
      _hover={{
        bgColor: 'gray.500',
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

const I18nSelector: React.FC = () => {
  const { locale, push } = useRouter();

  const handleChangeLocale = (locale: 'pt-BR' | 'en') => {
    push('/', '/', {
      locale,
    });
  };

  return (
    <Flex color="white" justify="flex-end" cursor="pointer">
      <BaseI18nOption
        bgColor={locale === 'pt-BR' ? 'gray.600' : 'transparent'}
        borderRadius="5px 0px 0px 5px"
        onClick={() => handleChangeLocale('pt-BR')}
      >
        <BrazilFlag />
      </BaseI18nOption>
      <BaseI18nOption
        bgColor={locale === 'en' ? 'gray.600' : 'transparent'}
        borderRadius="0px 5px 5px 0px"
        onClick={() => handleChangeLocale('en')}
      >
        <USAFlag />
      </BaseI18nOption>
    </Flex>
  );
};

export default I18nSelector;
