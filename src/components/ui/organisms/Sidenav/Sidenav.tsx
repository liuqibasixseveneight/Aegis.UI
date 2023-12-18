import { type FC } from "react";
import { Box, Flex } from "@chakra-ui/react";

import { SidenavProps } from "./types";
import { AvatarBox, Logo, Navigation, SwitchButtons } from "../../../ui";
import { listItems } from "./listItems";

const Sidenav: FC<SidenavProps> = ({ isOpen }) => {
  return (
    <Flex
      as="aside"
      w="full"
      h="full"
      maxW={isOpen ? 350 : 100}
      bg="white"
      alignItems="center"
      padding={6}
      flexDirection="column"
      justifyContent="space-between"
      borderRadius="3xl"
      transition="ease-in-out 0.2s"
    >
      <Box w="full">
        <Logo isOpen={isOpen} />
        <SwitchButtons isOpen={isOpen} />
        <Navigation listItems={listItems} isOpen={isOpen} />
      </Box>

      <AvatarBox
        userConfiguration={{
          username: "rla-aegis",
          displayName: "Riz Layton",
          email: "rla@aegis.com",
        }}
        isOpen={isOpen}
      />
    </Flex>
  );
};

export default Sidenav;
