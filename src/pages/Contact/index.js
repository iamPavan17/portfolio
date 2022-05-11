import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";

import Helmet from "components/Helmet";
import { Text, Grid, Button, Input } from "components/UI";
import { textTheme } from "App/theme/text.theme";
import { isError, encodeUri } from "utils";

import { schema } from "./schema";
import {
  Section,
  Container,
  FormContainer,
  spacing,
  InputWrapper,
  StyledGrid,
} from "./styles";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeUri({ "form-name": "contact", ...data }),
    })
      .then(({ status }) => {
        if (status === 200) {
          reset();
        }
        if (status !== 200) {
          toast.error("Something went wrong!");
          return;
        }
        toast.success("Thanks, Will contact you soon...");
      })
      .catch(() => toast.error("Something went wrong!"));
  };

  return (
    <Section>
      <Helmet title="Contact" />
      <Toaster position="bottom-center" />

      <Container>
        <Text fontSize={textTheme.fontSize.h2} fontWeight={"bold"}>
          Get in Touch
        </Text>

        <Text fontSize={textTheme.fontSize.h5}>
          Fill the form or just send me an email to &nbsp;
          <a href="mailto:iampavan05@gmail.com">iampavan05@gmail.com</a>
        </Text>

        <FormContainer>
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <StyledGrid cols={"1fr 1fr"} colGap={"5.2rem"} css={spacing}>
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
            </StyledGrid>

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
