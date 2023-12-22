import { type FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { IntegrationsMainProps } from '../../types';

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
      <Text fontSize={100} color='gray.300'>
        Integrations
      </Text>
    </Flex>
  );
};

export default IntegrationsMain;
