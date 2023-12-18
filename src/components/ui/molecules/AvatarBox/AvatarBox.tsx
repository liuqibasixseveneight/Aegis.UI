import { type FC } from "react";
import { Avatar, Flex, IconButton, Text } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

import { AvatarBoxProps } from "./types";

const AvatarBox: FC<AvatarBoxProps> = ({ userConfiguration, isOpen }) => {
  const { displayName, email } = userConfiguration;

  return (
    <Flex
      borderWidth={isOpen ? 1 : 0}
      borderColor="gray.100"
      borderRadius="full"
      w="full"
      p={2}
      alignItems="center"
      justifyContent="space-between"
      gap={2}
      flexDirection={isOpen ? "row" : "column-reverse"}
    >
      <Avatar name="Aegis" bg="teal.300" />

      {isOpen && (
        <Flex
          w="full"
          flexDirection="column"
          gap={4}
          justifyContent="center"
          alignItems="flex-start"
        >
          <Text fontSize="sm" fontWeight="bold" pb={0} lineHeight={0}>
            {displayName}
          </Text>
          <Text as="small" color="gray.500" fontSize={12} lineHeight={0}>
            {email}
          </Text>
        </Flex>
      )}

      <IconButton
        aria-label="Settings"
        icon={<SettingsIcon />}
        borderRadius="full"
        color="gray.400"
        variant="ghost"
        fontSize={20}
      />
    </Flex>
  );
};

export default AvatarBox;
