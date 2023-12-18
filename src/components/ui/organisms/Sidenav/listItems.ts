import {
  AtSignIcon,
  BellIcon,
  CalendarIcon,
  ChatIcon,
  EmailIcon,
  InfoOutlineIcon,
  PhoneIcon,
  RepeatClockIcon,
  SettingsIcon,
} from '@chakra-ui/icons';

import { ListItem } from './types';

export const listItems: ListItem[] = [
  {
    type: 'link',
    label: 'Dashboard',
    icon: AtSignIcon,
    path: '/',
  },
  {
    type: 'link',
    label: 'Products',
    icon: InfoOutlineIcon,
    path: '/',
  },
  {
    type: 'link',
    label: 'Mail',
    icon: EmailIcon,
    path: '/',
  },
  {
    type: 'link',
    label: 'Campaigns',
    icon: RepeatClockIcon,
    path: '/',
  },
  {
    type: 'link',
    label: 'Calendar',
    icon: CalendarIcon,
    path: '/',
  },
  {
    type: 'link',
    label: 'Contacts',
    icon: PhoneIcon,
    path: '/',
  },
  {
    type: 'header',
    label: 'Account',
  },
  {
    type: 'link',
    label: 'Notifications',
    icon: BellIcon,
    path: '/',
    notifications: 24,
  },
  {
    type: 'link',
    label: 'Chat',
    icon: ChatIcon,
    path: '/',
    messages: 8,
  },
  {
    type: 'link',
    label: 'Settings',
    icon: SettingsIcon,
    path: '/',
  },
];
