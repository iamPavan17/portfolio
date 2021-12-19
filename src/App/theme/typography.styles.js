import { css } from "styled-components";
import PrimaryFont from "./assets/SCProsperSans-Regular.ttf";

export const fontFamily = "SC Prosper Sans";

export const fontFace = css`
  @font-face {
    font-family: ${fontFamily};
    src: url(${PrimaryFont});
  }
`;
