import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import { Dashboard, Home, Incident } from './components/modules';

function App() {
  return (
    <Box w='full' minW='100vw' h='full' minH='100vh' bg='gray.100'>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/dashboard' Component={Dashboard} />
        <Route path='/incident' Component={Incident} />
      </Routes>
    </Box>
  );
}

export default App;
