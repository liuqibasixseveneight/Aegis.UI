import { type FC } from 'react';
import { HStack } from '@chakra-ui/react';

import { OtherFormsProps } from '../types';
import { OtherFormsMain } from '../containers';

const OtherForms: FC<OtherFormsProps> = () => {
  return (
    <HStack w='full' h='full' borderRadius='3xl'>
      <OtherFormsMain />
    </HStack>
  );
};

export default OtherForms;
