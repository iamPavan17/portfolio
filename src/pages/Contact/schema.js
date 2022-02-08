import * as Yup from "yup";

const REQUIRED_MESSAGE = "This is a required field.";

export const schema = Yup.object({
  name: Yup.string().required(REQUIRED_MESSAGE),
  email: Yup.string().email().required(REQUIRED_MESSAGE),
  subject: Yup.string().max(30),
  message: Yup.string().min(10).max(200).required(REQUIRED_MESSAGE),
}).required();
