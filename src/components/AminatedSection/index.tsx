import { useRef } from 'react';
import { Box, Flex, FlexProps } from '@chakra-ui/react';
import { useInView } from 'framer-motion';

interface IAnimatedSections {
  Container: React.FC<React.PropsWithChildren & FlexProps>;
  Section: React.FC<React.PropsWithChildren & FlexProps>;
}

const AnimatedSections = {} as IAnimatedSections;

AnimatedSections.Container = ({ children, ...rest }) => {
  return (
    <Flex direction="column" minHeight="90vh" {...rest}>
      {children}
    </Flex>
  );
};

AnimatedSections.Section = ({ children, ...rest }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Flex ref={ref} justify="flex-start" padding="50px" w="100%" h="101vh" {...rest}>
      <Box
        display="block"
        w="100%"
        h="100%"
        opacity={isInView ? 1 : 0}
        transition="all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      >
        {children}
      </Box>
    </Flex>
  );
};

export default AnimatedSections;
