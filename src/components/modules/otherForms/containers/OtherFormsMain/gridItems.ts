import { AtSignIcon } from '@chakra-ui/icons';

import { GridItem } from '../../../../ui/organisms/ModuleGrid/types';
import { CapacityToConsent, DiagnosisOfDeath } from '../../../../modules';

export const gridItems: GridItem = [
  {
    id: '0',
    name: 'capacityToConsent',
    displayName: 'Capacity to Consent',
    icon: AtSignIcon,
    path: '/main/other-forms/capacity-to-consent',
    page: CapacityToConsent,
  },
  {
    id: '1',
    name: 'diagnosisOfDeath',
    displayName: 'Diagnosis of Death',
    icon: AtSignIcon,
    path: '/main/other-forms/diagnosis-of-death',
    page: DiagnosisOfDeath,
  },
];
