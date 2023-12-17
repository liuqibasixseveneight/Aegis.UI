import { type FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { SidenavProps } from './types';
import { AvatarBox, LogoSearch, Navigation, SwitchButtons } from '../../../ui';
import { listItems } from './listItems';

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
            <SwitchButtons />
            <Navigation listItems={listItems} />
          </Box>

          <AvatarBox />
        </>
      </Flex>
    </>
  );
};

export default Sidenav;
