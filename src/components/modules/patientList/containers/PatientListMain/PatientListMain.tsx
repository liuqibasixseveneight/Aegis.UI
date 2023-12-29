import { type FC, useState } from 'react';

import { PatientListMainProps } from '../../types';
import { ModulePage, PatientListTable } from '../../../../ui';
import { listColumns } from './listColumns';
import { listData } from './listData';

const PatientListMain: FC<PatientListMainProps> = () => {
  const [isPatientListIncoming, setIsPatientListIncoming] =
    useState<boolean>(false);

  return (
    <ModulePage
      heading={{
        title: 'Patient List',
        subtitle: `A list of ${
          isPatientListIncoming ? 'incoming' : 'currently active'
        } Patients`,
      }}
      content={<PatientListTable columns={listColumns} data={listData} />}
    />
  );
};

export default PatientListMain;
