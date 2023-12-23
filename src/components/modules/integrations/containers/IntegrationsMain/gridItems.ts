import { AtSignIcon } from '@chakra-ui/icons';

import { GridItem } from '../../../../ui/organisms/ModuleGrid/types';

export const gridItems: GridItem = [
  {
    id: '0',
    name: 'patientSearch',
    displayName: 'Patient Search',
    icon: AtSignIcon,
    path: '/main/integrations/patient-search',
  },
  {
    id: '1',
    name: 'transferPatientRecord',
    displayName: 'Transfer Patient Record',
    icon: AtSignIcon,
    path: '/main/integrations/transfer-patient-record',
  },
  {
    id: '2',
    name: 'defibrillatorDataImport',
    displayName: 'Defibrillator Data Import',
    icon: AtSignIcon,
    path: '/main/integrations/defibrillator-data-import',
  },
];
