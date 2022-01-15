import React from "react";

import { Text, Flex, Card, Button } from "components/UI";
import { textTheme } from "App/theme/text.theme";

import { offlineExpData, offlineEduData } from "./constants";
import { Section, Container, paddingTB, paddingB } from "./styles";

export default function Resume() {
  return (
    <Section>
      <Container>
        <Text
          fontSize={textTheme.fontSize.h2}
          textAlign="center"
          fontWeight={"bold"}
          css={paddingB}
        >
          RESUME
        </Text>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          css={paddingTB}
        >
          <Text fontSize={textTheme.fontSize.h4} fontWeight={"bold"}>
            Experience
          </Text>
          <Button>Download CV</Button>
        </Flex>

        <Flex flexDirection="column" gap="3.6rem">
          {offlineExpData.map((item) => (
            <Card data={item} />
          ))}
        </Flex>

        <Flex justifyContent="space-between" css={paddingTB}>
          <Text fontSize={textTheme.fontSize.h4} fontWeight={"bold"}>
            Education
          </Text>
        </Flex>

        <Flex flexDirection="column" gap="3.6rem">
          {offlineEduData.map((item) => (
            <Card data={item} />
          ))}
        </Flex>
      </Container>
    </Section>
  );
}
