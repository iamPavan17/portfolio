import styled, { css } from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4.8rem;
  height: 8.6rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2.4rem;
  font-size: 2rem;
  list-style: none;
`;

const onHoverStyle = css`
  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

export { StyledHeader, StyledList, onHoverStyle };
