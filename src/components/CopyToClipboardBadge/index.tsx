import { Box, Tooltip, useBoolean } from '@chakra-ui/react';
import SocialBadge, { SocialBadgeProps } from '../SocialBadge';

interface CopyToClipboardBadgeProps extends SocialBadgeProps {
  text: string;
}

const CopyToClipboardBadge: React.FC<CopyToClipboardBadgeProps> = ({ text, ...rest }) => {
  const [open, setOpen] = useBoolean(false);

  const handleCopy = () => {
    setOpen.on();
    navigator.clipboard.writeText(text);
    setTimeout(() => setOpen.off(), 1000);
  };

  return (
    <Tooltip isOpen={open} label="Copiado para a área de transferência!">
      <Box cursor="pointer" onClick={handleCopy}>
        <SocialBadge {...rest} />
      </Box>
    </Tooltip>
  );
};

export default CopyToClipboardBadge;
