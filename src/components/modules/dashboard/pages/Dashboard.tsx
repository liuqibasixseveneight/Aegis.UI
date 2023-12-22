import { type FC } from 'react';
import { HStack } from '@chakra-ui/react';

import { DashboardProps } from '../types';
import { DashboardMain } from '../containers';

const Dashboard: FC<DashboardProps> = () => {
  return (
    <HStack w='full' h='full' borderRadius='3xl'>
      <DashboardMain />
    </HStack>
  );
};

export default Dashboard;
