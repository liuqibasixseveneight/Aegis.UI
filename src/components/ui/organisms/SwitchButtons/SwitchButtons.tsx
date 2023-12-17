import { type FC, useState, MouseEvent } from 'react';
import { Button, Flex } from '@chakra-ui/react';

import { SwitchButtonsProps } from './types';

const SwitchButtons: FC<SwitchButtonsProps> = () => {
  const [isPersonal, setIsPersonal] = useState<boolean>(true);
  const [isBusiness, setIsBusiness] = useState<boolean>(false);

  const handleButtonOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = event;

    if (currentTarget?.id === 'personal') {
      setIsBusiness(() => false);
      setIsPersonal(() => true);
    }
    if (currentTarget?.id === 'business') {
      setIsPersonal(() => false);
      setIsBusiness(() => true);
    }
  };

  return (
    <Flex
      w='full'
      borderWidth={1}
      borderColor='gray.100'
      borderRadius={14}
      my={6}
    >
      <Button
        w='full'
        variant={isPersonal ? 'solid' : 'ghost'}
        borderRadius={14}
        colorScheme={isPersonal ? 'messenger' : 'gray'}
        id='personal'
        textTransform='uppercase'
        size='sm'
        py={5}
        onClick={handleButtonOnClick}
      >
        Personal
      </Button>

      <Button
        w='full'
        variant={isBusiness ? 'solid' : 'ghost'}
        borderRadius={14}
        colorScheme={isBusiness ? 'messenger' : 'gray'}
        id='business'
        textTransform='uppercase'
        onClick={handleButtonOnClick}
        color={isBusiness ? 'white' : 'gray.500'}
        size='sm'
        py={5}
      >
        Business
      </Button>
    </Flex>
  );
};

export default SwitchButtons;
