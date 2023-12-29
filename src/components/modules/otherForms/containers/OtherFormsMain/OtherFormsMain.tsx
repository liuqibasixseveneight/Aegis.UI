import { type FC } from 'react';

import { OtherFormsMainProps } from '../../types';
import { ModuleGrid, ModulePage } from '../../../../ui';
import { gridItems } from './gridItems';

const OtherFormsMain: FC<OtherFormsMainProps> = () => {
  return (
    <ModulePage
      heading={{
        title: 'Other Forms',
        subtitle: 'A collection of non-primary path forms',
      }}
      content={<ModuleGrid gridItems={gridItems} />}
    />
  );
};

export default OtherFormsMain;
