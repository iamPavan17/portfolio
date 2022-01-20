/** Grid component */

import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  ${({
    justifyContent = "normal",
    alignContent = "normal",
    // rows,
    cols,
    rowGap,
    colGap,
    css,
  }) =>
    `
       grid-template-columns: ${cols};
       justify-content: ${justifyContent};
       align-content: ${alignContent};
       row-gap: ${rowGap};
       column-gap: ${colGap};

       ${css}
    `}
`;
