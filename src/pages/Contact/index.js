import React from "react";

import { Text, Grid, Button } from "components/UI";
import { textTheme } from "App/theme/text.theme";

import { Section, Container, FormContainer } from "./styles";

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

        <FormContainer>
          <form>
            <Grid cols={"1fr 1fr"} colGap={"6.2rem"}>
              <div>
                <label style={{ display: "block" }}>First Name</label>
                <input type="text" style={{ width: "100%" }} />
              </div>

              <div>
                <label style={{ display: "block" }}>First Name</label>
                <input type="text" style={{ width: "100%" }} />
              </div>
            </Grid>

            <Grid cols={"1fr"} rowGap={"2.4rem"}>
              <div>
                <label style={{ display: "block" }}>First Name</label>
                <input type="email" style={{ width: "100%" }} />
              </div>

              <div>
                <label style={{ display: "block" }}>First Name</label>
                <textarea rows="10" style={{ width: "100%" }} />
              </div>
            </Grid>
            <Button>Submit</Button>
          </form>
        </FormContainer>
      </Container>
    </Section>
  );
}
