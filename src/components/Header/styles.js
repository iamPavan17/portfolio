import styled from "styled-components";

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
  align-items: center;
  gap: 3.6rem;
  font-size: 2rem;
  list-style: none;

  a {
    transition: all 0.2s;
    transform: translateX(50px);
    opacity: 0;
    pointer-events: none;
    visibility: hidden;

    &:hover {
      opacity: 0.5;
    }
  }

  .active {
    transform: translateX(-10px);
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
  }
`;

const MenuIconWrapper = styled.div`
  width: 35px;
  height: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: all 0.2s;

  .active-line-one {
    transform: rotate(45deg);
    margin-top: 14px;
  }

  .active-line-two {
    width: 100%;
    transform: rotate(-45deg);
    margin-bottom: 14px;
  }
`;

const LineOne = styled.div`
  transition: all 0.2s;
  width: 100%;
  height: 2px;
  background-color: #000;
`;

const LineTwo = styled.div`
  transition: all 0.2s;
  margin-bottom: 3px;
  width: 75%;
  height: 2px;
  background-color: #000;
  align-self: flex-end;
`;

export { StyledHeader, StyledList, MenuIconWrapper, LineOne, LineTwo };
