import styled from "styled-components";

export const Button = styled.button`
  border: 2px solid transparent;
  cursor: pointer;
  letter-spacing: 0.5px;
  outline: none;
  padding: 1rem 3rem;
  border-radius: 50px;
  font-weight: bold;
  transition: all 0.4s;

  ${({ theme }) => `
    font-family: ${theme.global.fontFamily};
    font-size: ${theme.text.fontSize.body};
    color: #fff;
    background-color: ${theme.text.color.secondary};

    &:hover {
        color: #000;
        background-color: ${theme.text.color.primary};
        border: 2px solid ${theme.text.color.secondary};
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
  `};
`;
