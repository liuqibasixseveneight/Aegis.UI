import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import {
  AegisUser,
  Dashboard,
  Home,
  Incident,
  Integrations,
  OtherForms,
  PatientList,
} from './components/modules';

function App() {
  return (
    <Box w='full' minW='100vw' h='full' minH='100vh' bg='gray.100'>
      <Routes>
        <Route index path='/' Component={Home} />
        <Route path='/main' Component={AegisUser}>
          <Route path='/main/dashboard' Component={Dashboard} />
          <Route path='/main/incident' Component={Incident} />
          <Route path='/main/other-forms' Component={OtherForms} />
          <Route path='/main/integrations' Component={Integrations} />
          <Route path='/main/patient-list' Component={PatientList} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
