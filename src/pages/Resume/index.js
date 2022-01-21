import React from "react";

import { Text, Flex, Card, Button } from "components/UI";
import { textTheme } from "App/theme/text.theme";

import { offlineExpData, offlineEduData } from "./constants";
import { Section, Container, spacing, spacingB } from "./styles";

export default function Resume() {
  return (
    <Section>
      <Container>
        <Text
          fontSize={textTheme.fontSize.h2}
          textAlign="center"
          fontWeight={"bold"}
          css={spacingB}
        >
          RESUME
        </Text>

        <Flex justifyContent="space-between" alignItems="center" css={spacing}>
          <Text fontSize={textTheme.fontSize.h4} fontWeight={"bold"}>
            Experience
          </Text>
          <Button primary>Download CV</Button>
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
