import { type FC, useState } from 'react';
import { HStack } from '@chakra-ui/react';

import { DashboardProps } from '../types';
import { Sidenav } from '../../../ui';
import { DashboardMain } from '../containers';

const Dashboard: FC<DashboardProps> = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState<boolean>(true);

  return (
    <HStack w='full' h='100vh' bg='gray.100' padding={10}>
      <Sidenav isOpen={isSidenavOpen} />

      <DashboardMain
        setIsSidenavOpen={() =>
          setIsSidenavOpen((isSidenavOpen) => !isSidenavOpen)
        }
      />
    </HStack>
  );
};

export default Dashboard;
