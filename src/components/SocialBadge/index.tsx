import { Center, Link, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface SocialBadgeProps {
  Icon: IconType;
  url: string;
  label: string;
}

const SocialBadge: React.FC<SocialBadgeProps> = ({ Icon, url, label }) => {
  return (
    <Link
      href={url}
      _hover={{
        textDecoration: 'none',
      }}
      isExternal
    >
      <Center
        flexDirection="row"
        gap={3}
        px={5}
        py={3}
        borderRadius={5}
        borderColor="white"
        borderWidth={1}
        color="white"
        _hover={{
          color: 'gray.300',
          transition: '0.2s',
          borderColor: 'gray.300',
        }}
      >
        <Icon size={22} />
        <Text>{label}</Text>
      </Center>
    </Link>
  );
};

export default SocialBadge;
