import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4.8rem;
  height: 8.6rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 750px) {
    padding: 0 3.6rem;
  }

  .mobile-nav-active {
    transform: translateY(0px);
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3.6rem;
  font-size: 2rem;
  list-style: none;
  margin-right: 3.6rem;

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

  @media (max-width: 800px) {
    display: none;
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

const MobileNav = styled.div`
  @media (min-width: 800px) {
    display: none;
  }

  z-index: 999;
  position: absolute;
  top: 8.6rem;
  right: 0;
  width: 100%;
  height: 250px;
  background: white;
  border-top: 1px solid ${(props) => props.theme.text.color.primary};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.6rem;

  li {
    list-style: none;
  }

  a {
    &:hover {
      opacity: 0.5;
    }
  }

  transition: all 0.2s;
  transform: translateY(-20px);
  opacity: 0;
  pointer-events: none;
  visibility: hidden;

  .list-text {
    font-size: 1.8rem !important;
  }
`;

const StyledImg = styled.img`
  height: 90px;

  @media (max-width: 750px) {
    height: 85px;
  }
`;

export {
  StyledHeader,
  StyledList,
  MenuIconWrapper,
  LineOne,
  LineTwo,
  MobileNav,
  StyledImg,
};
