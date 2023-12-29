import { type FC } from 'react';
import { HStack } from '@chakra-ui/react';

import { IncidentProps } from '../types';
import { IncidentMain } from '../containers';

const Incident: FC<IncidentProps> = () => {
  return (
    <HStack w='full' maxH='full'>
      <IncidentMain />
    </HStack>
  );
};

export default Incident;
