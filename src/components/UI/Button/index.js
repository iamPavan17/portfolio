import styled from "styled-components";

export const Button = styled.button`
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
    border: 2px solid ${theme.text.color.secondary};
    background-color: ${theme.text.color.primary};
    color: #000;

    &:hover {
        color: #fff;
        border: 2px solid ${theme.text.color.secondary};
        background-color: ${theme.text.color.secondary};
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
  `};
`;
