import { type FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { PatientListMainProps } from '../../types';
import { PatientListTable } from '../../../../ui';
import { listColumns } from './listColumns';
import { listData } from './listData';

const PatientListMain: FC<PatientListMainProps> = () => {
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
      <Box w='full' h='full' padding={6}>
        <PatientListTable columns={listColumns} data={listData} />
      </Box>
    </Flex>
  );
};

export default PatientListMain;
