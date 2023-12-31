import { type FC } from 'react';

import { SettingsProps } from '../types';
import { ModulePage } from '../../../ui';

const Settings: FC<SettingsProps> = () => {
  return (
    <ModulePage
      heading={{
        title: 'Settings',
        subtitle: 'Configure settings for your account',
      }}
      content={null}
    />
  );
};

export default Settings;
