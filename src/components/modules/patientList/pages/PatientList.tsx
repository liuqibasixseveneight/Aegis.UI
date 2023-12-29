import { type FC } from 'react';
import { HStack } from '@chakra-ui/react';

import { PatientListProps } from '../types';
import { PatientListMain } from '../containers';

const PatientList: FC<PatientListProps> = () => {
  return (
    <HStack h='full' w='full' overflowY='auto' paddingBottom={12}>
      <PatientListMain />
    </HStack>
  );
};

export default PatientList;
