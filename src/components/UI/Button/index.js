import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  letter-spacing: 0.5px;
  outline: none;
  padding: 1rem 3rem;
  border-radius: 50px;
  font-weight: bold;
  transition: all 0.4s;

  ${({ theme, primary }) => `
    font-family: ${theme.global.fontFamily};
    font-size: ${theme.text.fontSize.body};
    border: 2px solid ${primary ? theme.text.color.secondary : "transparent"};
    background-color: ${primary ? "transparent" : theme.text.color.secondary};
    color: ${primary ? "#000" : "#fff"};

    &:hover {
        color: ${primary ? "#fff" : "#000"};
        border: 2px solid ${theme.text.color.secondary};
        background-color: ${
          primary ? theme.text.color.secondary : "transparent"
        };
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
  `};
`;
