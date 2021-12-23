import React from "react";
import { Flex, Text, Link } from "components/UI";

import ArrowRightIcon from "./assets/ArrowRight.svg";
import { StyledImg, margin, onHoverStyle } from "./styles";

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
      <Text fontSize={4.4} css={margin}>
        Page not found
      </Text>
      <Link to="/" css={onHoverStyle}>
        <Flex alignItems="flex-start" gap="1.2rem">
          <Text fontSize={1.8} fontWeight="bold">
            Go Home
          </Text>
          <StyledImg src={ArrowRightIcon} alt="Arrow right" />
        </Flex>
      </Link>
    </Flex>
  );
}
