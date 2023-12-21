import { type FC, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Link as ChakraLink,
  Stack,
  Text,
  VStack,
  Image,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { SignInFormProps } from '../../types';
import aegisLogo from '../../../../../assets/images/aegis/logo.png';
import { ROUTES } from '../../../../../config';

const SignInForm: FC<SignInFormProps> = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);

  return (
    <Stack spacing={4}>
      <VStack gap={6}>
        <VStack as='header'>
          <Box boxSize='sm' w='400px'>
            <Image src={aegisLogo} alt='Aegis logo' borderRadius='xl' />
          </Box>
        </VStack>

        <Card
          bg='white'
          variant='outline'
          borderColor='gray.100'
          w='400px'
          borderRadius='xl'
          padding={8}
        >
          <CardBody>
            <form>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel size='sm'>Username or email address</FormLabel>
                  <Input
                    type='text'
                    bg='white'
                    borderColor='gray.100'
                    size='sm'
                    borderRadius='xl'
                  />
                </FormControl>

                <FormControl>
                  <HStack
                    display='flex'
                    alignItems='baseline'
                    justifyContent='space-between'
                  >
                    <FormLabel size='sm'>Password</FormLabel>
                    <Button
                      as={Link}
                      to={ROUTES?.HOME}
                      variant='link'
                      size='xs'
                      fontWeight={500}
                    >
                      Forgot password?
                    </Button>
                  </HStack>

                  <InputGroup size='sm'>
                    <Input
                      type={isPasswordHidden ? 'password' : 'text'}
                      bg='white'
                      borderColor='gray.100'
                      size='sm'
                      borderRadius='xl'
                    />
                    <InputRightElement
                      onClick={() =>
                        setIsPasswordHidden(
                          (isPasswordHidden) => !isPasswordHidden
                        )
                      }
                      cursor='pointer'
                      borderRadius='xl'
                    >
                      {isPasswordHidden ? <ViewOffIcon /> : <ViewIcon />}
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <Button size='sm' as={Link} to={ROUTES?.DASHBOARD} mt={6}>
                  Sign In
                </Button>
              </Stack>
            </form>
          </CardBody>
        </Card>

        <Card
          variant='outline'
          borderColor='gray.100'
          borderRadius='xl'
          w='400px'
        >
          <CardBody>
            <Center>
              <HStack fontSize='sm'>
                <Text>
                  Contact an administrator to{' '}
                  <ChakraLink as={Link} isExternal to={ROUTES?.DASHBOARD}>
                    create an account
                  </ChakraLink>
                </Text>
              </HStack>
            </Center>
          </CardBody>
        </Card>
      </VStack>
    </Stack>
  );
};

export default SignInForm;
