import React from "react";
import PropTypes from "prop-types";

import { Text, Flex } from "components/UI";
import { textTheme } from "App/theme/text.theme";

import { Container } from "./styles";

export function Card({ data }) {
  const { year, title, body, description } = data;
  return (
    <Container>
      <Flex flexDirection="column" gap="1rem">
        <Text fontSize={textTheme.fontSize.h5} fontWeight="bold">
          {year}
        </Text>
        <Text fontSize={textTheme.fontSize.title} lineHeight={1.2}>
          {title}
        </Text>
        <Text fontSize={textTheme.fontSize.caption}>{body}</Text>
      </Flex>
      <Flex>
        <Text fontSize={textTheme.fontSize.title} lineHeight={1.6}>
          {description}
        </Text>
      </Flex>
    </Container>
  );
}

Card.defaultProps = {
  data: {
    year: "2019 - Present",
    title: "JOB POSITION",
    body: "COMPANY NAME",
    description: "Lorem ipsum dolor sit amet.",
  },
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
};
