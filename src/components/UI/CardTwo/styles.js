import styled from "styled-components";

const Container = styled.div`
  padding: 3rem 2.4rem 0.1rem 3rem;
  background-color: #fff;
  cursor: pointer;

  img {
    display: inline-block;
    margin-bottom: 2.4rem;
    height: 8rem;

    &:last-child {
      display: block;
      height: 2rem;
      margin-top: 1.8rem;
      margin-left: auto;
      transition: all 0.4s;
      transform: translateX(-5px);
      opacity: 0.7;
    }
  }

  &:hover {
    img {
      &:last-child {
        transform: translateX(5px);
        opacity: 1;
      }
    }
  }

  p {
    &:nth-child(3) {
      margin-top: 0.8rem;
      max-width: 90%;
    }
  }
`;

export { Container };
