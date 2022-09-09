import { Box, Tooltip, useBoolean } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import SocialBadge, { SocialBadgeProps } from '../SocialBadge';

interface CopyToClipboardBadgeProps extends SocialBadgeProps {
  text: string;
}

const CopyToClipboardBadge: React.FC<CopyToClipboardBadgeProps> = ({ text, ...rest }) => {
  const [open, setOpen] = useBoolean(false);
  const { t } = useTranslation();

  const handleCopy = () => {
    setOpen.on();
    navigator.clipboard.writeText(text);
    setTimeout(() => setOpen.off(), 1000);
  };

  return (
    <Tooltip isOpen={open} label={`${t('copiedToClipboard')}!`}>
      <Box cursor="pointer" onClick={handleCopy}>
        <SocialBadge {...rest} />
      </Box>
    </Tooltip>
  );
};

export default CopyToClipboardBadge;
