import { type FC } from 'react';
import { HStack } from '@chakra-ui/react';

import { PatientListProps } from '../types';
import { PatientListMain } from '../containers';

const PatientList: FC<PatientListProps> = () => {
  return (
    <HStack w='full' h='full' borderRadius='3xl'>
      <PatientListMain />
    </HStack>
  );
};

export default PatientList;
