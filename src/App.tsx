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
import { gridItems as incidentItems } from './components/modules/incident/containers/IncidentMain/gridItems';
import { gridItems as otherFormsItems } from './components/modules/otherForms/containers/OtherFormsMain/gridItems';
import { gridItems as integrationsItems } from './components/modules/integrations/containers/IntegrationsMain/gridItems';

function App() {
  return (
    <Box w='full' minW='100vw' h='full' minH='100vh' bg='gray.100'>
      <Routes>
        {/* MAIN */}
        <Route index path='/' Component={Home} />
        <Route path='/main' Component={AegisUser}>
          <Route path='/main/dashboard' Component={Dashboard} />

          <Route path='/main/incident' Component={Incident} />
          {incidentItems?.map((incidentItem) => (
            <Route
              key={`${incidentItem?.id}-${incidentItem?.displayName}`}
              path={incidentItem?.path}
              Component={incidentItem?.page ? incidentItem?.page : null}
              element={
                !incidentItem?.page && <div>{incidentItem?.displayName}</div>
              }
            />
          ))}

          <Route path='/main/other-forms' Component={OtherForms} />
          {otherFormsItems?.map((otherFormsItem) => (
            <Route
              key={`${otherFormsItem?.id}-${otherFormsItem?.displayName}`}
              path={otherFormsItem?.path}
              Component={otherFormsItem?.page ? otherFormsItem?.page : null}
              element={
                !otherFormsItem?.page && (
                  <div>{otherFormsItem?.displayName}</div>
                )
              }
            />
          ))}

          <Route path='/main/integrations' Component={Integrations} />
          {integrationsItems?.map((integrationsItem) => (
            <Route
              key={`${integrationsItem?.id}-${integrationsItem?.displayName}`}
              path={integrationsItem?.path}
              Component={integrationsItem?.page ? integrationsItem?.page : null}
              element={
                !integrationsItem?.page && (
                  <div>{integrationsItem?.displayName}</div>
                )
              }
            />
          ))}

          <Route path='/main/patient-list' Component={PatientList} />
        </Route>

        {/* USER */}
        <Route path='/user' Component={AegisUser}>
          <Route
            path='/user/notifications'
            element={<div>Notifications</div>}
          />
          <Route path='/user/chat' element={<div>Chat</div>} />
          <Route path='/user/training' element={<div>Training</div>} />
          <Route path='/user/settings' element={<div>Settings</div>} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
