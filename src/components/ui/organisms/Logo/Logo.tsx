import { type FC } from 'react';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { AtSignIcon } from '@chakra-ui/icons';

import { LogoProps } from './types';
import { SidenavToggle } from '../..';

const Logo: FC<LogoProps> = ({ isOpen, onClick }) => {
  return (
    <Flex
      w='full'
      alignItems='center'
      justifyContent='space-between'
      flexDirection={isOpen ? 'row' : 'column'}
      gap={4}
    >
      {isOpen && (
        <Box display='flex' alignItems='center' gap={2}>
          <Icon as={AtSignIcon} fontSize={30} />
          <Text fontWeight='bold' fontSize={16}>
            Aegis
          </Text>
        </Box>
      )}

      <SidenavToggle isOpen={isOpen} onClick={onClick} />
    </Flex>
  );
};

export default Logo;
