import React from "react";
import { Flex, Text } from "components/UI";
import { margin } from "./styles";

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
      <Text fontSize={4.8} css={margin}>
        Page not found
      </Text>
      <Text fontSize={2} fontWeight="bold">
        Go Home
      </Text>
    </Flex>
  );
}
