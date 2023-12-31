import { type FC } from 'react';

import { DiagnosisOfDeathProps } from '../types';
import { ModulePage } from '../../../ui';

const DiagnosisOfDeath: FC<DiagnosisOfDeathProps> = () => {
  return (
    <ModulePage
      heading={{
        title: 'Diagnosis Of Death',
        subtitle: "Document the findings of a Patient's death condition",
      }}
      content={null}
    />
  );
};

export default DiagnosisOfDeath;
