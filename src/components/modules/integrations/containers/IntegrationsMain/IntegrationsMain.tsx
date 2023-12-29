import { type FC } from 'react';

import { IntegrationsMainProps } from '../../types';
import { ModuleGrid, ModulePage } from '../../../../ui';
import { gridItems } from './gridItems';

const IntegrationsMain: FC<IntegrationsMainProps> = () => {
  return (
    <ModulePage
      heading={{
        title: 'Integrations',
        subtitle: 'A collection of forms relating to external connections',
      }}
      content={<ModuleGrid gridItems={gridItems} />}
    />
  );
};

export default IntegrationsMain;
