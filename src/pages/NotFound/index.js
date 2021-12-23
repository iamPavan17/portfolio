import React from "react";
import { Flex } from "components/UI/Layout";
import { Text } from "components/UI/Text";
import { marginBottom } from "./styles";

export default function NotFound() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="610px"
      gap="0.8rem"
    >
      <Text fontSize={18}>404</Text>
      <Text fontSize={4.8} css={marginBottom}>
        Page not found
      </Text>
      <Text fontSize={2} fontWeight="bold">
        Go Home
      </Text>
    </Flex>
  );
}
