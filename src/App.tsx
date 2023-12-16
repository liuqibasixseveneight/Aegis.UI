import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Dashboard, Home } from './components/modules';

const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  min-width: 100vw;
`;

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/dashboard' Component={Dashboard} />
      </Routes>
    </Wrapper>
  );
}

export default App;
