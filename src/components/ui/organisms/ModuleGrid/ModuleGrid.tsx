import { FC } from 'react';
import { Grid } from '@chakra-ui/react';

import { ModuleGridProps } from './types';
import { ModuleGridItem } from '../../../ui';

const ModuleGrid: FC<ModuleGridProps> = ({ gridItems }) => {
  return (
    <Grid
      templateColumns={`repeat(auto-fill, 200px)`}
      gap={8}
      justifyContent='center'
      p={6}
      w='full'
      h='full'
      overflowY='auto'
      placeContent='flex-start'
    >
      {gridItems?.map((gridItem) => (
        <ModuleGridItem key={gridItem?.id} gridItem={gridItem} />
      ))}
    </Grid>
  );
};

export default ModuleGrid;
