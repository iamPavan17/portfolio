import { forwardRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Text } from "components/UI";
import { textTheme } from "App/theme/text.theme";

const StyledLabel = styled.label`
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
`;

const StyledInput = styled.input`
  letter-spacing: 0.2px;
  outline: none;
  padding: 10px;
  transition: 0.4s;
  width: 100%;
  border-top: 0px;
  border-right: 0px;
  border-left: 0px;

  ${({ theme, error }) => `
  font-family: ${theme.global.fontFamily};
  font-size: 1.4rem;
  border-bottom: 2px solid ${theme.text.color.secondary};

  ${error && `border-color: ${theme.text.color.error}`};

  ${
    !error &&
    `
  &:focus, &:hover {
    border-bottom: 2px solid ${theme.text.color.default};
  }
  `
  }
`}
`;

/**
 * themed Input component
 */
export const Input = forwardRef(
  ({ id, label, error, errorMessage, ...rest }, ref) => (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput id={id} error={error} {...rest} ref={ref} />

      {error && (
        <Text
          fontSize={textTheme.fontSize.caption}
          fontWeight={"bold"}
          color={"error"}
        >
          {errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1)}
        </Text>
      )}
    </>
  )
);

Input.propTypes = {
  error: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

Input.defaultProps = {
  error: false,
};
