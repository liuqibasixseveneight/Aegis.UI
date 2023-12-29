import { ElementType, type FC } from 'react';

import { ModuleGridItemProps } from './types';
import { Box, Icon, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ModuleGridItem: FC<ModuleGridItemProps> = ({ gridItem }) => {
  const { id, icon, displayName, path } = gridItem;

  return (
    <Link to={path}>
      <Box
        key={id}
        w='200px'
        h='200px'
        bg='blue.300'
        display='flex'
        alignItems='center'
        justifyContent='center'
        color='white'
        _hover={{ background: 'blue.500' }}
        transition='ease-in-out 0.2s'
        cursor='pointer'
        borderRadius='3xl'
      >
        <VStack
          h='full'
          w='full'
          alignItems='center'
          justifyContent='center'
          position='relative'
        >
          <Icon
            as={icon as unknown as ElementType}
            fontSize={60}
            m={0}
            alignItems='center'
            justifyContent='center'
            h='80px'
            w='80px'
            marginBottom={14}
          />
          <Text
            fontSize={14}
            fontWeight={700}
            display='flex'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            position='absolute'
            bottom={0}
            paddingY={4}
            paddingX={2}
            bg='rgba(0, 0, 0,0.1)'
            borderBottomLeftRadius='3xl'
            borderBottomRightRadius='3xl'
            h='60px'
            w='full'
          >
            {displayName}
          </Text>
        </VStack>
      </Box>
    </Link>
  );
};

export default ModuleGridItem;
