import styled, { css } from "styled-components";

const StyledImg = styled.img`
  height: 1.8rem;
  transition: all 0.4s;
`;

const margin = css`
  margin: -1.8rem 0 3.6rem 0;
`;

const onHoverStyle = css`
  border-bottom: 2px solid transparent;
  padding-bottom: 1rem;
  transition: all 0.4s;

  &:hover {
    opacity: 0.7;
    border-bottom: 2px solid #7c606b;
  }
  &:hover img {
    transform: translateX(4px);
  }
`;

export { StyledImg, margin, onHoverStyle };
