import styled, { css } from "styled-components";

const Section = styled.section`
  background: #ece4db;
  height: 90vh;
`;

const StyledImg = styled.img`
  height: 1.8rem;
  transition: all 0.4s;
`;

const onHoverStyle = css`
  border-bottom: 2px solid transparent;

  padding: 1.4rem 0;
  transition: all 0.4s;

  &:hover {
    opacity: 0.7;
    border-bottom: 2px solid #7c606b;
  }
  &:hover img {
    transform: translateX(4px);
  }
`;

export { StyledImg, onHoverStyle, Section };
