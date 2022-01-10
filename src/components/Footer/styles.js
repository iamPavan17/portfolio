import styled, { css } from "styled-components";

const StyledFooter = styled.footer`
  padding: 3.6rem 4.4rem;
`;

const Img = styled.img`
  height: 17px;
`;

const onHoverStyle = css`
  p {
    transition: all 0.3s;
  }
  &:hover p {
    opacity: 0.7;
  }
`;

export { StyledFooter, Img, onHoverStyle };
