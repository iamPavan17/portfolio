import React from "react";
import { Flex, Text, Link } from "components/UI";
import { textTheme } from "App/theme/text.theme";

import { ABOUT_ROUTE } from "App/routes";
import ArrowRightIcon from "./assets/ArrowRight.svg";
import { StyledImg, spacing, onHoverStyle } from "./styles";

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
      <Text fontSize={4.4} css={spacing}>
        Page not found
      </Text>
      <Link to={ABOUT_ROUTE} css={onHoverStyle}>
        <Flex alignItems="flex-start" gap="1.2rem">
          <Text fontSize={textTheme.fontSize.h5} fontWeight="bold">
            Go Home
          </Text>
          <StyledImg src={ArrowRightIcon} alt="Arrow right" />
        </Flex>
      </Link>
    </Flex>
  );
}
