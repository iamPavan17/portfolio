import styled, { css } from "styled-components";
import { Flex } from "components/UI";

const StyledFooter = styled.footer`
  padding: 3.6rem 4.4rem;
`;

const StyledFlex = styled(Flex)`
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;

    div {
      &:nth-child(2) {
        order: -1;
      }
    }
  }
`;

const Img = styled.img`
  height: 17px;
`;

const onHoverStyle = css`
  p {
    transition: all 0.3s;
  }
  &:hover p {
    opacity: 0.5;
  }
`;

export { StyledFooter, Img, onHoverStyle, StyledFlex };
