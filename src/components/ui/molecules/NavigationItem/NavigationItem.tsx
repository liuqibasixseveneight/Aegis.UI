import { ElementType, type FC } from 'react';
import {
  Box,
  Badge,
  Heading,
  ListIcon,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { NavigationItemProps } from './types';

const NavigationItem: FC<NavigationItemProps> = ({ item, isActive }) => {
  const { label, type } = item;

  if (type === 'link') {
    const { icon, notifications, path, messages } = item;

    return (
      <Box display='flex' alignItems='center' my={6} justifyContent='center'>
        <ChakraLink
          href={path}
          as={Link}
          gap={1}
          display='flex'
          alignItems='center'
          fontWeight='medium'
          w='full'
          color={isActive ? 'black' : 'gray.400'}
          _hover={{ textDecoration: 'none', color: 'black' }}
        >
          <ListIcon as={icon as unknown as ElementType} fontSize={22} m={0} />
          <Text>{label}</Text>

          {notifications && (
            <Badge
              borderRadius='full'
              colorScheme='yellow'
              w={6}
              textAlign='center'
            >
              {notifications}
            </Badge>
          )}
          {messages && (
            <Badge
              borderRadius='full'
              colorScheme='green'
              w={6}
              textAlign='center'
            >
              {messages}
            </Badge>
          )}
        </ChakraLink>
      </Box>
    );
  }

  return (
    <Heading
      color='gray.400'
      fontWeight='medium'
      textTransform='uppercase'
      fontSize='sm'
      borderTopWidth={1}
      borderColor='gray.100'
      pt={8}
      my={8}
    >
      <Text>{label}</Text>
    </Heading>
  );
};

export default NavigationItem;
