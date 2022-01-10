import React from "react";
import { Flex, Text, Link } from "components/UI";

import { textTheme } from "App/theme/text.theme";
import HeartIcon from "./assets/heart.svg";
import { StyledFooter, Img, onHoverStyle } from "./styles";

export default function Footer() {
  return (
    <StyledFooter>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex justifyContent="center" alignItems="center" gap="0.6rem">
          <Text fontSize={textTheme.fontSize.title}>
            &copy; {`${new Date().getFullYear()}`} Designed and Developed with
          </Text>
          <Img src={HeartIcon} alt="Heart" />
        </Flex>
        <Flex alignItems="center" justifyContent="center" gap="1.2rem">
          <Link
            to={{ pathname: "https://instagram.com" }}
            css={onHoverStyle}
            target={"_blank"}
          >
            <Text fontSize={textTheme.fontSize.title}>IG</Text>
          </Link>
          <Link
            to={{ pathname: "https://twitter.com" }}
            css={onHoverStyle}
            target={"_blank"}
          >
            <Text fontSize={textTheme.fontSize.title}>TW</Text>
          </Link>

          <Link
            to={{ pathname: "https://linkedin.com" }}
            css={onHoverStyle}
            target={"_blank"}
          >
            <Text fontSize={textTheme.fontSize.title}>LI</Text>
          </Link>
          <Link
            to={{ pathname: "https://dribbble.com" }}
            css={onHoverStyle}
            target={"_blank"}
          >
            <Text fontSize={textTheme.fontSize.title}>DR</Text>
          </Link>
          <Link
            to={{ pathname: "https://facebook.com" }}
            css={onHoverStyle}
            target={"_blank"}
          >
            <Text fontSize={textTheme.fontSize.title}>FB</Text>
          </Link>
        </Flex>
      </Flex>
    </StyledFooter>
  );
}
