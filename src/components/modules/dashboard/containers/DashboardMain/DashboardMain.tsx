import { type FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { DashboardMainProps } from '../../types';
import { SidenavToggle } from '../../../../ui';

const DashboardMain: FC<DashboardMainProps> = ({ setIsSidenavOpen }) => {
  return (
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
      <SidenavToggle onClick={setIsSidenavOpen} />
      <Text fontSize={100} color='gray.300'>
        Main
      </Text>
    </Flex>
  );
};

export default DashboardMain;
