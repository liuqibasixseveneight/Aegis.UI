import { ComponentType, ReactElement } from 'react';
import { IconProps } from '@chakra-ui/react';

export type GridItem = {
  id: string | number;
  name: string;
  displayName: string;
  icon: ReactElement | ComponentType<IconProps>;
  path: string;
  page: ComponentType;
};

export type ModuleGridProps = {
  gridItems: GridItem[];
};
