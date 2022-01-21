import styled, { css } from "styled-components";

const Section = styled.section`
  background: #ece4db;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 7.4rem 1.4rem;
`;

const FormContainer = styled.div`
  background-color: #fff;
  margin-top: 50px;
  padding: 6.2rem 6.2rem;
`;

const spacing = css`
  margin-bottom: 4.4rem;
`;

export { Section, Container, FormContainer, spacing };
