import React from "react";
import { Flex, Text, Link } from "components/UI";

import { textTheme } from "App/theme/text.theme";
import HeartIcon from "./assets/heart.svg";
import LinkedinIcon from "./assets/linkedin.svg";
import MailIcon from "./assets/mail.svg";
import GitIcon from "./assets/github.svg";
import { StyledFooter, onHoverStyle, StyledFlex } from "./styles";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledFlex alignItems="center" justifyContent="space-between">
        <Flex justifyContent="center" alignItems="center" gap="0.6rem">
          <Text fontSize={textTheme.fontSize.title}>
            &copy; {`${new Date().getFullYear()}`} Designed and Developed with
          </Text>
          <img src={HeartIcon} alt="Heart" style={{ height: "17px" }} />
        </Flex>
        <Flex alignItems="center" justifyContent="center" gap="2rem">
          <Link
            to={{ pathname: "mailto:iampavan05@gmail.com" }}
            css={onHoverStyle}
            target={"_blank"}
          >
            <img src={MailIcon} alt="Mail" style={{ height: "18px" }} />
          </Link>
          <Link
            to={{ pathname: "https://github.com/iamPavan17" }}
            css={onHoverStyle}
            target={"_blank"}
          >
            <img src={GitIcon} alt="Linkedin" style={{ height: "18px" }} />
          </Link>
          <Link
            to={{ pathname: "https://linkedin.com/in/iampavan17" }}
            css={onHoverStyle}
            target={"_blank"}
          >
            <img src={LinkedinIcon} alt="Linkedin" style={{ height: "18px" }} />
          </Link>
        </Flex>
      </StyledFlex>
    </StyledFooter>
  );
}
