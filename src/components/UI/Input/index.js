import styled from "styled-components";
import PropTypes from "prop-types";

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
export function Input({ name, label, error, ...rest }) {
  return (
    <>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput id={name} error={error} {...rest} />
    </>
  );
}
Input.propTypes = {
  error: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

Input.defaultProps = {
  error: false,
};
