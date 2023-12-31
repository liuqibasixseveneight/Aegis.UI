import { type FC } from 'react';

import { DashboardProps } from '../types';
import { ModulePage } from '../../../ui';

const Dashboard: FC<DashboardProps> = () => {
  return (
    <ModulePage
      heading={{
        title: 'Dashboard',
        subtitle: 'Various modules used to monitor Patients within Aegis',
      }}
      content={null}
    />
  );
};

export default Dashboard;
