import styled from "styled-components";

const Container = styled.div`
  padding: 5.2rem 4.4rem;
  background: #fff;
  display: grid;
  grid-template-columns: 35fr 65fr;

  @media (max-width: 500px) {
    gap: 2.4rem !important;
  }
`;

export { Container };
