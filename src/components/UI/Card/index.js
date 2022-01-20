import React from "react";
import PropTypes from "prop-types";

import { Text, Flex } from "components/UI";
import { textTheme } from "App/theme/text.theme";

import { Container } from "./styles";

export function Card({ data }) {
  const { year, title, body, description, descriptionTwo } = data;
  return (
    <Container>
      <Flex flexDirection="column" gap="1rem">
        <Text fontSize={textTheme.fontSize.h5} fontWeight="bold">
          {title}
        </Text>
        <Text fontSize={textTheme.fontSize.title} lineHeight={1.2}>
          {body}
        </Text>
        <Text fontSize={textTheme.fontSize.caption}>{year}</Text>
      </Flex>
      <Flex flexDirection="column" gap="2.4rem">
        <Text fontSize={textTheme.fontSize.title} lineHeight={1.6}>
          {description}
        </Text>
        <Text fontSize={textTheme.fontSize.title} lineHeight={1.6}>
          {descriptionTwo}
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
    descriptionTwo: "Lorem ipsum dolor sit amet.",
  },
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
};
