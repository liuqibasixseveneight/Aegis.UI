import { type FC } from 'react';
import { HStack } from '@chakra-ui/react';

import { IntegrationsProps } from '../types';
import { IntegrationsMain } from '../containers';

const Integrations: FC<IntegrationsProps> = () => {
  return (
    <HStack w='full' h='full' borderRadius='3xl'>
      <IntegrationsMain />
    </HStack>
  );
};

export default Integrations;
