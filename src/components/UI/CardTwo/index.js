import React from "react";
import PropTypes from "prop-types";

import { Text, Link } from "components/UI";
import { textTheme } from "App/theme/text.theme";
import ArrowIcon from "pages/NotFound/assets/ArrowRight.svg";

import { Container } from "./styles";

export function CardTwo({ data }) {
  const { title, body, logo, url } = data;
  return (
    <Link to={{ pathname: url }} target={"_blank"}>
      <Container>
        <img src={logo} alt="Project Logo" />
        <Text fontSize={textTheme.fontSize.h5} fontWeight="bold">
          {title}
        </Text>
        <Text
          fontSize={textTheme.fontSize.title}
          lineHeight={1.4}
          color={"caption"}
        >
          {body}
        </Text>

        <img src={ArrowIcon} alt="Arrow right " />
      </Container>
    </Link>
  );
}

CardTwo.defaultProps = {
  data: {
    logo: "https://i.ibb.co/H2vLQ43/My-project-3.png",
    title: "Project Name",
    body: "Lorem ipsum dolor sit amet. Sed mollis nulla sed elit scelerisque porta.",
    url: "https://google.com/",
  },
};

CardTwo.propTypes = {
  data: PropTypes.object.isRequired,
};
