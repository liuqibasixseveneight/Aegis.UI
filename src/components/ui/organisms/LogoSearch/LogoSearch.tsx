import { type FC } from 'react';
import { Box, Flex, Icon, IconButton, Text } from '@chakra-ui/react';
import { AtSignIcon, SearchIcon } from '@chakra-ui/icons';

import { LogoSearchProps } from './types';

const LogoSearch: FC<LogoSearchProps> = () => {
  return (
    <Flex
      w='full'
      alignItems='center'
      justifyContent='space-between'
      flexDirection='row'
      gap={4}
    >
      <Box display='flex' alignItems='center' gap={2}>
        <Icon as={AtSignIcon} fontSize={30} />
        <Text fontWeight='bold' fontSize={16}>
          Aegis
        </Text>
      </Box>

      <IconButton
        aria-label='Search'
        variant='ghost'
        icon={<SearchIcon />}
        fontSize={26}
        color='gray.400'
        borderRadius='50%'
      />
    </Flex>
  );
};

export default LogoSearch;
