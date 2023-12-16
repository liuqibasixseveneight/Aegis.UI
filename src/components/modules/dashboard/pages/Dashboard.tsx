import { type FC } from 'react';
import { Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import { DashboardProps } from '../types';
import { Sidenav } from '../../../ui';

const Dashboard: FC<DashboardProps> = () => {
  return (
    <HStack w='full' h='100vh' bg='gray.100' padding={10}>
      <Sidenav />

      <Flex
        as='main'
        w='full'
        h='full'
        bg='white'
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
        position='relative'
        borderRadius='3xl'
      >
        <IconButton
          aria-label='Menu Collapse'
          icon={<HamburgerIcon />}
          position='absolute'
          top={6}
          left={6}
          onClick={() => null}
        />
        <Text fontSize={100} color='gray.300'>
          Dashboard
        </Text>
      </Flex>
    </HStack>
  );
};

export default Dashboard;
