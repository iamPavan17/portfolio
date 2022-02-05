import React from "react";

import { Text, Grid, Button, Input } from "components/UI";
import { textTheme } from "App/theme/text.theme";

import { Section, Container, FormContainer, spacing } from "./styles";

export default function Contact() {
  return (
    <Section>
      <Container>
        <Text
          fontSize={textTheme.fontSize.h2}
          // textAlign="center"
          fontWeight={"bold"}
        >
          Get in Touch
        </Text>

        <Text fontSize={textTheme.fontSize.h5}>
          Fill the form or just send me an email on &nbsp;
          <a href="mailto:info@yoursite.com">info@yoursite.com</a>
        </Text>

        <FormContainer>
          <form autoComplete="off">
            <Grid cols={"1fr 1fr"} colGap={"5.2rem"} css={spacing}>
              <div>
                <Input name={"name"} label="Name" />
              </div>
              <div>
                <Input name={"email"} label="Email" />
              </div>
            </Grid>

            <Grid cols={"1fr"} rowGap={"4.4rem"} css={spacing}>
              <div>
                <Input name={"subject"} label="Subject" />
              </div>

              <div>
                <Input name={"message"} label="Message" />
              </div>
            </Grid>
            <Button>Submit</Button>
          </form>
        </FormContainer>
      </Container>
    </Section>
  );
}
