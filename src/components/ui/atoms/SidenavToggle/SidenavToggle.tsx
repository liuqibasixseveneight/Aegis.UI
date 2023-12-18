import { type FC } from 'react';
import { IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import { SidenavToggleProps } from './types';

const SidenavToggle: FC<SidenavToggleProps> = ({ onClick }) => {
  return (
    <IconButton
      aria-label='Menu Collapse'
      icon={<HamburgerIcon />}
      position='absolute'
      top={6}
      left={6}
      onClick={onClick}
      _hover={{
        background: 'gray.300',
        borderColor: 'transparent',
      }}
    />
  );
};

export default SidenavToggle;
