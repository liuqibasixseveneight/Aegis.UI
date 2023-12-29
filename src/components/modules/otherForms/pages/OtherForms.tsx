import { type FC } from 'react';
import { HStack } from '@chakra-ui/react';

import { OtherFormsProps } from '../types';
import { OtherFormsMain } from '../containers';

const OtherForms: FC<OtherFormsProps> = () => {
  return (
    <HStack w='full' maxH='full' overflowY='auto'>
      <OtherFormsMain />
    </HStack>
  );
};

export default OtherForms;
