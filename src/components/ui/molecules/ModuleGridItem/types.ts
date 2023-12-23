import { ComponentType, ReactElement } from 'react';
import { IconProps } from '@chakra-ui/react';

export type ModuleGridItemProps = {
  id: string | number;
  name: string;
  displayName: string;
  icon: ReactElement | ComponentType<IconProps>;
  path: string;
};
