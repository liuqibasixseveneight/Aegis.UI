import { type FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { IncidentMainProps } from '../../types';

const IncidentMain: FC<IncidentMainProps> = () => {
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
      <Text fontSize={100} color='gray.300'>
        Incident
      </Text>
    </Flex>
  );
};

export default IncidentMain;
