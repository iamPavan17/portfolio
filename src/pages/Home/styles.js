import styled from "styled-components";
import { Flex } from "components/UI";

const Section = styled.section`
  background: linear-gradient(90deg, #ece4db 100%, #fff 5%);
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  // padding: 1.4rem;

  @media (max-width: 850px) {
    padding: 0 3.6rem;
  }

  @media (max-width: 650px) {
    padding: 3.6rem 2rem;
  }

  @media (max-width: 500px) {
    .title {
      font-size: 5.2rem !important;
    }
  }
`;

const UserImg = styled.img`
  display: inline-block;
  width: 180px;
  border-radius: 50%;
  filter: brightness(110%);
  margin-bottom: 4.4rem;
`;

export { Section, Container, UserImg };
