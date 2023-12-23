import { ComponentType, ReactElement } from 'react';
import { IconProps } from '@chakra-ui/react';

export type GridItem = {
  id: string | number;
  name: string;
  displayName: string;
  icon: ReactElement | ComponentType<IconProps>;
  path: string;
};

export type ModuleGridProps = {
  gridItems: GridItem[];
};
