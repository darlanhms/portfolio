import { Center, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

export interface SocialBadgeProps {
  Icon: IconType;
  label: string;
  variant?: 'dark' | 'light';
}

const SocialBadge: React.FC<SocialBadgeProps> = ({ Icon, label, variant = 'dark' }) => {
  return (
    <Center
      flexDirection="row"
      gap={3}
      px={5}
      py={3}
      borderRadius={5}
      borderColor={variant === 'dark' ? 'white' : 'gray.700'}
      borderWidth={1}
      cursor="pointer"
      color={variant === 'dark' ? 'white' : 'gray.700'}
      _hover={{
        color: variant === 'dark' ? 'gray.300' : 'gray.500',
        transition: '0.2s',
        borderColor: variant === 'dark' ? 'gray.300' : 'gray.500',
      }}
    >
      <Icon size={22} />
      <Text>{label}</Text>
    </Center>
  );
};

export default SocialBadge;
