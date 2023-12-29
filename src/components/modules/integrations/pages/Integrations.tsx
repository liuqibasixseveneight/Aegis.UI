import { type FC } from 'react';
import { HStack } from '@chakra-ui/react';

import { IntegrationsProps } from '../types';
import { IntegrationsMain } from '../containers';

const Integrations: FC<IntegrationsProps> = () => {
  return (
    <HStack w='full' maxH='full'>
      <IntegrationsMain />
    </HStack>
  );
};

export default Integrations;
