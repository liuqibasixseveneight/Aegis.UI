import { type FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { SidenavProps } from './types';
import { AvatarBox, Logo, Navigation, SwitchButtons } from '../../../ui';
import { listItems } from './listItems';

const Sidenav: FC<SidenavProps> = ({ isOpen }) => {
  return (
    <Flex
      as='aside'
      w='full'
      h='full'
      maxW={isOpen ? 350 : 100}
      bg='white'
      alignItems='center'
      padding={6}
      flexDirection='column'
      justifyContent='space-between'
      borderRadius='3xl'
    >
      <Box w='full'>
        <Logo />
        <SwitchButtons />
        <Navigation listItems={listItems} />
      </Box>

      <AvatarBox
        userConfiguration={{
          username: 'rla-aegis',
          displayName: 'Riz Layton',
          email: 'rla@aegis.com',
        }}
      />
    </Flex>
  );
};

export default Sidenav;
