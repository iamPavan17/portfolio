import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLink = styled.a`
  ${({ theme, textDecoration, css }) => `
    color: ${theme.text.color["default"].color};
    text-decoration: ${textDecoration};

    ${css}
  `}
`;

/**
 * Link component
 */
export function Link({ to, target, children, textDecoration, css }) {
  return (
    <StyledLink
      href={to}
      target={target}
      textDecoration={textDecoration}
      css={css}
    >
      {children}
    </StyledLink>
  );
}

Link.defaultProps = {
  target: "_self",
  textDecoration: "none",
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  target: PropTypes.oneOf(["_self", "_blank"]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  textDecoration: PropTypes.oneOf(["underline", "none"]),
  css: PropTypes.array,
};
