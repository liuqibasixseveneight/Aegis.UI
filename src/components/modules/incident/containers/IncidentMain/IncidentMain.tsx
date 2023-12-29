import { type FC } from 'react';

import { IncidentMainProps } from '../../types';
import { ModuleGrid, ModulePage } from '../../../../ui';
import { gridItems } from './gridItems';

const IncidentMain: FC<IncidentMainProps> = () => {
  return (
    <ModulePage
      heading={{
        title: 'Incident',
        subtitle: 'A collection of primary path forms',
      }}
      content={<ModuleGrid gridItems={gridItems} />}
    />
  );
};

export default IncidentMain;
