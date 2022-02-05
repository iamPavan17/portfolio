import React from "react";
import { Flex, Text, Link } from "components/UI";
import { textTheme } from "App/theme/text.theme";

import { ABOUT_ROUTE } from "App/routes";
import ArrowRightIcon from "./assets/ArrowRight.svg";
import { Section, StyledImg, onHoverStyle } from "./styles";

export default function NotFound() {
  return (
    <Section>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="710px"
        gap="2.4rem"
      >
        <Text fontSize={18} textAlign="center">
          404
        </Text>
        <Text fontSize={5.2} textAlign="center">
          Page not found
        </Text>
        <Text fontSize={2} textAlign="center">
          The page you are looking for doesn't exist or has been moved.
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
    </Section>
  );
}
