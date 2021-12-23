import PropTypes from "prop-types";
import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

const StyledLink = styled(LinkRouter)`
  ${({ theme, textDecoration, css }) => `
    color: ${theme.text.color["default"]};
    text-decoration: ${textDecoration};

    ${css}
  `}
`;

/**
 * Link component
 */
export function Link({ to, children, textDecoration, css }) {
  return (
    <StyledLink to={to} textDecoration={textDecoration} css={css}>
      {children}
    </StyledLink>
  );
}

Link.defaultProps = {
  textDecoration: "none",
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  textDecoration: PropTypes.oneOf(["underline", "none"]),
  css: PropTypes.array,
};
