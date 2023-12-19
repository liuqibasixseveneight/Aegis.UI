import { type FC } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import { SidenavToggleProps } from './types';

const SidenavToggle: FC<SidenavToggleProps> = ({ isOpen, onClick }) => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent={isOpen ? 'flex-end' : 'center'}
    >
      <IconButton
        aria-label='Menu Collapse'
        icon={<HamburgerIcon />}
        justifyContent='center'
        onClick={onClick}
        _hover={{
          background: 'gray.300',
          borderColor: 'transparent',
        }}
      />
    </Box>
  );
};

export default SidenavToggle;
