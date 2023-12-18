import { type FC } from "react";
import { Box, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { AtSignIcon, SearchIcon } from "@chakra-ui/icons";

import { LogoProps } from "./types";

const Logo: FC<LogoProps> = ({ isOpen }) => {
  return (
    <Flex
      w="full"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={isOpen ? "row" : "column"}
      gap={4}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <Icon as={AtSignIcon} fontSize={30} />

        {isOpen && (
          <Text fontWeight="bold" fontSize={16}>
            Aegis
          </Text>
        )}
      </Box>

      <IconButton
        aria-label="Search"
        variant="ghost"
        icon={<SearchIcon />}
        fontSize={26}
        color="gray.400"
        borderRadius="50%"
      />
    </Flex>
  );
};

export default Logo;
