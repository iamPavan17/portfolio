import React from "react";

import { Text, Link } from "components/UI";
import { textTheme } from "App/theme/text.theme";

import AboutImage from "./assets/about.jpg";
import TwitterIcon from "./assets/twitter.svg";
import LinkedinIcon from "./assets/linkedin.svg";
import DribbleIcon from "./assets/dribbble.svg";
import InstaIcon from "./assets/instagram.svg";
import {
  Section,
  Container,
  Content,
  UserImg,
  IconsWrapper,
  IconImg,
  onHoverStyle,
} from "./styles";

export default function About() {
  return (
    <Section>
      <Container>
        <UserImg src={AboutImage} />
        <Content>
          <Text fontSize={6} fontWeight={"bold"}>
            Hello I'm Mathilde.
          </Text>

          <Text fontSize={textTheme.fontSize.h4} lineHeight={1.4}>
            I’m a frontend developer and content creator <br />
            based in the Netherlands.
          </Text>

          <IconsWrapper>
            <Link
              to={{ pathname: "https://twitter.com" }}
              css={onHoverStyle}
              target={"_blank"}
            >
              <IconImg src={TwitterIcon} alt="social icon" />
            </Link>
            <Link
              to={{ pathname: "https://www.linkedin.com" }}
              css={onHoverStyle}
              target={"_blank"}
            >
              <IconImg src={LinkedinIcon} alt="social icon" />
            </Link>
            <Link
              to={{ pathname: "https://dribbble.com" }}
              css={onHoverStyle}
              target={"_blank"}
            >
              <IconImg src={DribbleIcon} alt="social icon" />
            </Link>
            <Link
              to={{ pathname: "https://instagram.com" }}
              css={onHoverStyle}
              target={"_blank"}
            >
              <IconImg src={InstaIcon} alt="social icon" />
            </Link>
          </IconsWrapper>
        </Content>
      </Container>
    </Section>
  );
}
