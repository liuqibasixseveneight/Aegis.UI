import { type FC, useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Box, HStack } from '@chakra-ui/react';

import { AegisUserProps } from '../types';
import { Sidenav } from '../../../ui';

const AegisUser: FC<AegisUserProps> = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState<boolean>(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location?.pathname === '/main') {
      navigate('/main/dashboard');
    }
  }, [location?.pathname, navigate]);

  const handleSidenavClick = () => {
    setIsSidenavOpen((isSidenavOpen) => !isSidenavOpen);
  };

  return (
    <HStack w='full' h='100vh' bg='gray.100' padding={10} gap={6}>
      <Sidenav isOpen={isSidenavOpen} setIsSidenavOpen={handleSidenavClick} />

      <Box w='full' h='full' bg='white' borderRadius='3xl'>
        <Outlet />
      </Box>
    </HStack>
  );
};

export default AegisUser;
