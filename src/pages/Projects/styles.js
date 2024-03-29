import styled from "styled-components";

const Section = styled.section`
  background: #ece4db;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 7.4rem 1.4rem;

  @media (max-width: 800px) {
    padding: 7.4rem 3rem;
  }
`;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 3rem;
  margin-top: 50px;
`;

export { Section, Container, ProjectContainer };
