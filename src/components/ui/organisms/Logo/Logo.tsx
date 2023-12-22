import { type FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Icon,
  Link as ChakraLink,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { AtSignIcon } from '@chakra-ui/icons';

import { LogoProps } from './types';
import { SidenavToggle } from '../../../ui';
import { ROUTES } from '../../../../config';

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
        <ChakraLink
          as={Link}
          to={ROUTES?.DASHBOARD}
          _hover={{ textDecoration: 'none', color: 'black' }}
        >
          <Tooltip
            isDisabled={!isOpen}
            label='Aegis | Version 2023-0.0.1'
            placement='bottom-end'
            aria-label='Aegis version number'
            openDelay={500}
          >
            <Box display='flex' alignItems='center' gap={2}>
              <Icon as={AtSignIcon} fontSize={30} />
              <Text fontWeight='bold' fontSize={16}>
                Aegis
              </Text>
            </Box>
          </Tooltip>
        </ChakraLink>
      )}

      <SidenavToggle isOpen={isOpen} onClick={onClick} />
    </Flex>
  );
};

export default Logo;
