import styled, { css } from "styled-components";
import { Grid } from "components/UI";

const Section = styled.section`
  background: #ece4db;

  div {
    &:first-child {
      font-size: 1.5rem;
    }
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  padding: 7.4rem 1.4rem;

  @media (max-width: 800px) {
    padding: 7.4rem 3rem;
  }
`;

const FormContainer = styled.div`
  background-color: #fff;
  margin-top: 35px;
  padding: 8rem 7.4rem;
`;

const InputWrapper = styled.div`
  position: relative;
  p {
    margin-top: 1rem;
    position: absolute;
  }
`;

const spacing = css`
  margin-bottom: 4.4rem;
`;

const StyledGrid = styled(Grid)`
  @media (max-width: 600px) {
    grid-template-columns: 1fr !important;
    row-gap: 4.2rem !important;
  }
`;

export { Section, Container, FormContainer, spacing, InputWrapper, StyledGrid };
