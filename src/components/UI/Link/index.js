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
export function Link({ to, children, textDecoration, css, target }) {
  return (
    <StyledLink
      to={to}
      textDecoration={textDecoration}
      css={css}
      target={target}
    >
      {children}
    </StyledLink>
  );
}

Link.defaultProps = {
  textDecoration: "none",
  target: "_self",
};

Link.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  textDecoration: PropTypes.oneOf(["underline", "none"]),
  css: PropTypes.array,
  target: PropTypes.oneOf(["_self", "_blank"]),
};
