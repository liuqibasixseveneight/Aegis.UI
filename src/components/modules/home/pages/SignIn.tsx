import { type FC } from 'react';
import { Center } from '@chakra-ui/react';

import { SignInProps } from '../types';
import { SignInForm } from '../containers';

const SignIn: FC<SignInProps> = () => {
  return (
    <Center h='100vh'>
      <SignInForm />
    </Center>
  );
};

export default SignIn;
