import styled, { css } from "styled-components";

const Section = styled.section`
  background: #ece4db;
`;

const Container = styled.div`
  max-width: 710px;
  margin: 0 auto;
  padding: 7.4rem 1.4rem;
`;

const paddingTB = css`
  padding-top: 7.4rem;
  padding-bottom: 4.4rem;
`;

const paddingB = css`
  padding-bottom: 1.8rem;
`;

export { Section, Container, paddingTB, paddingB };
