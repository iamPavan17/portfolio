import React from "react";

import Helmet from "components/Helmet";
import { Text, Link, Flex, Button } from "components/UI";
import { textTheme } from "App/theme/text.theme";
import { PROJECTS_ROUTE, CONTACT_ROUTE } from "App/routes";
import AboutImage from "./assets/profile3.png";

import { Section, Container, UserImg } from "./styles";

export default function About() {
  return (
    <Section>
      <Helmet title="Home" />
      <Container>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="90vh"
        >
          <UserImg src={AboutImage} />
          <Flex flexDirection="column" alignItems="center" gap="2.4rem">
            <Text
              className="title"
              fontSize={6}
              fontWeight={"bold"}
              textAlign="center"
            >
              Hello, I'm Pavan.
            </Text>

            <Text
              fontSize={textTheme.fontSize.h4}
              lineHeight={1.4}
              textAlign="center"
            >
              I'm a Full Stack Engineer based in Bengaluru, India.
              {/* Currently
              employed at{" "}
              <Link
                to={{ pathname: "https://geekyants.com" }}
                target={"_blank"}
              >
                @GeekyAnts
              </Link> */}
            </Text>

            <Flex gap="1.8rem">
              <Link to={PROJECTS_ROUTE}>
                <Button primary>See my work</Button>
              </Link>
              <Link to={CONTACT_ROUTE}>
                <Button primary>Contact me</Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}
