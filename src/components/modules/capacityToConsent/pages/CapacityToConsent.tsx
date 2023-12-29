import { type FC } from 'react';

import { CapacityToConsentProps } from '../types';
import { ModulePage } from '../../../ui';

const CapacityToConsent: FC<CapacityToConsentProps> = () => {
  return (
    <ModulePage
      heading={{
        title: 'Capacity To Consent',
        subtitle:
          "Document a Patient's consent (or lack of) for various terms, policies and conditions",
      }}
    />
  );
};

export default CapacityToConsent;
