import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  ${({
    flexDirection = "row",
    justifyContent = "normal",
    alignItems = "normal",
    gap,
    minHeight,
  }) =>
    `
       flex-direction: ${flexDirection};
       justify-content: ${justifyContent};
       align-items: ${alignItems};
       gap: ${gap};
       min-height: ${minHeight};
    `}
`;
