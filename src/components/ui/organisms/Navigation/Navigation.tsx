import { type FC } from "react";
import { List, ListItem } from "@chakra-ui/react";

import { NavigationProps } from "./types";
import { NavigationItem } from "../../../ui";

const Navigation: FC<NavigationProps> = ({ listItems, isOpen }) => {
  return (
    <List>
      {listItems?.map((item, index) => (
        <ListItem key={`${index}-${item?.label}`}>
          <NavigationItem item={item} isActive={index === 0} isOpen={isOpen} />
        </ListItem>
      ))}
    </List>
  );
};

export default Navigation;
