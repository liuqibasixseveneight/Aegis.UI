import { type FC } from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

import { PageHeadingProps } from './types';

const PageHeading: FC<PageHeadingProps> = ({ title, subtitle }) => {
  return (
    <Box w='full' h='auto' as='header' paddingBottom={6}>
      <VStack alignItems='flex-start'>
        <Heading>{title}</Heading>
        {subtitle && <Text color='gray.500'>{subtitle}</Text>}
      </VStack>
    </Box>
  );
};

export default PageHeading;
