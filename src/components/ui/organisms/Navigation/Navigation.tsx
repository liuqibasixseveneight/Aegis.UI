import { type FC } from 'react';
import { List, ListItem } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import { NavigationProps } from './types';
import { NavigationItem } from '../../../ui';

const Navigation: FC<NavigationProps> = ({ listItems, isOpen }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <List>
      {listItems?.map((item, index) => (
        <ListItem key={`${index}-${item?.label}`}>
          <NavigationItem
            item={item}
            isActive={pathname === item?.path}
            isOpen={isOpen}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default Navigation;
