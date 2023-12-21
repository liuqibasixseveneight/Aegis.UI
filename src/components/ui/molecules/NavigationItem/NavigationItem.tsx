import { ElementType, type FC } from 'react';
import {
  Box,
  Badge,
  Heading,
  ListIcon,
  Link as ChakraLink,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { NavigationItemProps } from './types';

const NavigationItem: FC<NavigationItemProps> = ({
  item,
  isActive,
  isOpen,
}) => {
  const { label, type } = item;

  if (type === 'link') {
    const { icon, notifications, path, messages } = item;

    return (
      <Box display='flex' alignItems='center' my={6} justifyContent='center'>
        <ChakraLink
          to={path}
          as={Link}
          gap={1}
          display='flex'
          alignItems='center'
          fontWeight='medium'
          w='full'
          color={isActive ? 'black' : 'gray.400'}
          _hover={{ textDecoration: 'none', color: 'black' }}
          justifyContent={isOpen ? '' : 'center'}
        >
          <Tooltip
            isDisabled={isOpen}
            label={label}
            placement='right-end'
            aria-label='Side navigation tooltip'
          >
            <Box display='flex' alignItems='center' justifyContent='center'>
              <ListIcon
                as={icon as unknown as ElementType}
                fontSize={22}
                m={0}
                mr={isOpen ? 4 : 0}
              />
              {isOpen && <Text>{label}</Text>}
            </Box>
          </Tooltip>
        </ChakraLink>

        {isOpen && (
          <>
            {notifications && (
              <Badge
                borderRadius='full'
                colorScheme='yellow'
                w={6}
                textAlign='center'
                ml='auto'
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
                ml='auto'
              >
                {messages}
              </Badge>
            )}
          </>
        )}
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
      pt={isOpen ? 8 : 0}
      my={8}
    >
      <Text display={isOpen ? 'flex' : 'none'}>{label}</Text>
    </Heading>
  );
};

export default NavigationItem;
