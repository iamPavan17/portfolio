import React from "react";
import { Flex } from "components/UI/Layout";

export default function NotFound() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="610px"
      gap="0.8rem"
    >
      <p style={{ fontSize: "18rem" }}>404</p>
      <p style={{ fontSize: 48 }}>Page not found</p>
      <p style={{ fontSize: 24 }}>Go Home</p>
    </Flex>
  );
}
