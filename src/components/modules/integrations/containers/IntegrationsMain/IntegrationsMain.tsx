import { type FC } from 'react';
import { Flex } from '@chakra-ui/react';

import { IntegrationsMainProps } from '../../types';
import { ModuleGrid } from '../../../../ui';
import { gridItems } from './gridItems';

const IntegrationsMain: FC<IntegrationsMainProps> = () => {
  return (
    <Flex
      as='main'
      w='full'
      h='full'
      bg='white'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      position='relative'
      borderRadius='3xl'
    >
      <ModuleGrid gridItems={gridItems} />
    </Flex>
  );
};

export default IntegrationsMain;
