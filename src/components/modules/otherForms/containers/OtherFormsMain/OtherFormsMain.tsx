import { type FC } from 'react';
import { Flex } from '@chakra-ui/react';

import { OtherFormsMainProps } from '../../types';
import { ModuleGrid } from '../../../../ui';
import { gridItems } from './gridItems';

const OtherFormsMain: FC<OtherFormsMainProps> = () => {
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

export default OtherFormsMain;
