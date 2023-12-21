import {
  AtSignIcon,
  BellIcon,
  CalendarIcon,
  ChatIcon,
  EmailIcon,
  InfoOutlineIcon,
  RepeatClockIcon,
  SettingsIcon,
  StarIcon,
} from '@chakra-ui/icons';

import { ListItem } from './types';
import { ROUTES } from '../../../../config';

export const listItems: ListItem[] = [
  {
    type: 'link',
    label: 'Dashboard',
    icon: AtSignIcon,
    path: ROUTES?.DASHBOARD,
  },
  {
    type: 'link',
    label: 'Incident',
    icon: InfoOutlineIcon,
    path: ROUTES?.INCIDENT,
  },
  {
    type: 'link',
    label: 'Other Forms',
    icon: EmailIcon,
    path: ROUTES?.['OTHER-FORMS'],
  },
  {
    type: 'link',
    label: 'Integrations',
    icon: RepeatClockIcon,
    path: ROUTES?.INTEGRATIONS,
  },
  {
    type: 'link',
    label: 'Patient List',
    icon: CalendarIcon,
    path: ROUTES?.['PATIENT-LIST'],
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
    label: 'Training',
    icon: StarIcon,
    path: ROUTES?.TRAINING,
  },
  {
    type: 'link',
    label: 'Settings',
    icon: SettingsIcon,
    path: ROUTES?.SETTINGS,
  },
];
