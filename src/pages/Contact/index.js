import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Text, Grid, Button, Input } from "components/UI";
import { textTheme } from "App/theme/text.theme";
import { isError } from "utils";

import { schema } from "./schema";
import {
  Section,
  Container,
  FormContainer,
  spacing,
  InputWrapper,
} from "./styles";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);
  return (
    <Section>
      <Container>
        <Text fontSize={textTheme.fontSize.h2} fontWeight={"bold"}>
          Get in Touch
        </Text>

        <Text fontSize={textTheme.fontSize.h5}>
          Fill the form or just send me an email on &nbsp;
          <a href="mailto:info@yoursite.com">info@yoursite.com</a>
        </Text>

        <FormContainer>
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Grid cols={"1fr 1fr"} colGap={"5.2rem"} css={spacing}>
              <InputWrapper>
                <Input
                  id={"name"}
                  label="Name"
                  {...register("name")}
                  error={isError(errors, "name")}
                  errorMessage={errors.name?.message}
                />
              </InputWrapper>
              <InputWrapper>
                <Input
                  id={"email"}
                  label="Email"
                  {...register("email")}
                  error={isError(errors, "email")}
                  errorMessage={errors.email?.message}
                />
              </InputWrapper>
            </Grid>

            <Grid cols={"1fr"} rowGap={"4.4rem"} css={spacing}>
              <InputWrapper>
                <Input
                  id={"subject"}
                  label="Subject"
                  {...register("subject")}
                  error={isError(errors, "subject")}
                  errorMessage={errors.subject?.message}
                />
              </InputWrapper>

              <InputWrapper>
                <Input
                  id={"message"}
                  label="Message"
                  {...register("message")}
                  error={isError(errors, "message")}
                  errorMessage={errors.message?.message}
                />
              </InputWrapper>
            </Grid>
            <Button>Submit</Button>
          </form>
        </FormContainer>
      </Container>
    </Section>
  );
}
