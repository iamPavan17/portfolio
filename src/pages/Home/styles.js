import styled from "styled-components";

const Section = styled.section`
  background: linear-gradient(90deg, #ece4db 100%, #fff 5%);
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  // padding: 1.4rem;
`;

const UserImg = styled.img`
  display: inline-block;
  width: 180px;
  border-radius: 50%;
  filter: brightness(110%);
  margin-bottom: 4.4rem;
`;

export { Section, Container, UserImg };
