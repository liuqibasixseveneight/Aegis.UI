import { IconProps } from '@chakra-ui/react';
import { ComponentType, ReactElement } from 'react';

type LinkItem = {
  type: 'link';
  label: string;
  path: string;
  icon: ReactElement | ComponentType<IconProps>;
  notifications?: number;
  messages?: number;
};

type HeaderItem = {
  type: 'header';
  label: string;
  icon?: ReactElement | ComponentType<IconProps>;
  notifications?: number;
  messages?: number;
};

export type ListItem = LinkItem | HeaderItem;

export type SidenavProps = {
  isOpen: boolean;
  setIsSidenavOpen: () => void;
};
