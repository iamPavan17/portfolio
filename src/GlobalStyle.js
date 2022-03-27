import { createGlobalStyle } from "styled-components";
import { fontFace } from "./App/theme/typography.styles";

const GlobalStyle = createGlobalStyle`
  ${fontFace};

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    /* font-size: 10px; */
    /* 10px / 16px = 0.625 = 62.5% */
    /* Percentage of user's browser font-size setting */
    font-size: 62.5%;
    overflow-x: hidden;
  }

  /**
   * theme is coming from <ThemeProvider />
   */
  body {
    font-family: ${({ theme }) => `${theme.global.fontFamily}`}, sans-serif;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @media (max-width: 750px) {
    html, body {
      font-size: 50%;
    }
  }
`;

export default GlobalStyle;
