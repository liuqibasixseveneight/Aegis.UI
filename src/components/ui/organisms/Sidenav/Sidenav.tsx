import { type FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { SidenavProps } from './types';
import { LogoSearch } from '../../../ui';

const Sidenav: FC<SidenavProps> = () => {
  return (
    <>
      <Flex
        as='aside'
        w='full'
        h='full'
        maxW={350}
        bg='white'
        alignItems='center'
        padding={6}
        flexDirection='column'
        justifyContent='space-between'
        borderRadius='3xl'
      >
        <>
          <Box w='full'>
            <LogoSearch />
          </Box>
        </>
      </Flex>
    </>
  );
};

export default Sidenav;
