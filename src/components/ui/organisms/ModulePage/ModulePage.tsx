import { type FC } from 'react';
import { Flex } from '@chakra-ui/react';

import { PageHeading } from '../../../ui';
import { ModulePageProps } from './types';

const ModulePage: FC<ModulePageProps> = ({
  heading: { title, subtitle },
  content,
  withoutHeading = false,
}) => {
  return (
    <Flex
      as='main'
      w='full'
      maxH='full'
      bg='transparent'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      position='relative'
    >
      {!withoutHeading && <PageHeading title={title} subtitle={subtitle} />}
      {content}
    </Flex>
  );
};

export default ModulePage;
