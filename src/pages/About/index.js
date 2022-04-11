import React from "react";

import Helmet from "components/Helmet";
import { Text, Flex, Card, Button, Link } from "components/UI";
import { textTheme } from "App/theme/text.theme";

import { offlineExpData, offlineEduData } from "./constants";
import { Section, Container, spacing, spacingB } from "./styles";
import Pdf from "./assets/Resume.pdf";

export default function About() {
  return (
    <Section>
      <Helmet title="About" />
      <Container>
        <Text
          fontSize={textTheme.fontSize.h2}
          textAlign="center"
          fontWeight={"bold"}
          css={spacingB}
        >
          About
        </Text>

        <Flex justifyContent="space-between" alignItems="center" css={spacing}>
          <Text fontSize={textTheme.fontSize.h4} fontWeight={"bold"}>
            Experience
          </Text>
          <Link to={{ pathname: Pdf }} target={"_blank"}>
            <Button primary>Download CV</Button>
          </Link>
        </Flex>

        <Flex flexDirection="column" gap="3rem">
          {offlineExpData.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </Flex>

        <Flex justifyContent="space-between" css={spacing}>
          <Text fontSize={textTheme.fontSize.h4} fontWeight={"bold"}>
            Education
          </Text>
        </Flex>

        <Flex flexDirection="column" gap="3rem">
          {offlineEduData.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </Flex>
      </Container>
    </Section>
  );
}
