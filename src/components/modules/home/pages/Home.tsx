import { type FC } from 'react';
import { Box } from '@chakra-ui/react';

import { HomeProps } from '../types';
import { SignIn } from '../pages';

const Home: FC<HomeProps> = () => {
  return (
    <Box w='full' minW='100vw' h='full' minH='100vh'>
      <SignIn />
    </Box>
  );
};

export default Home;
