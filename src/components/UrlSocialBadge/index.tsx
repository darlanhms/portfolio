import { Link } from '@chakra-ui/react';
import SocialBadge, { SocialBadgeProps } from '../SocialBadge';

interface UrlSocialBadgeProps extends SocialBadgeProps {
  url: string;
}

const UrlSocialBadge: React.FC<UrlSocialBadgeProps> = ({ url, ...rest }) => {
  return (
    <Link
      href={url}
      _hover={{
        textDecoration: 'none',
      }}
      isExternal
    >
      <SocialBadge {...rest} />
    </Link>
  );
};

export default UrlSocialBadge;
