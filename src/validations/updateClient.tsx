import * as yup from "yup";

export const formSchemaUpdateClient = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email("Email inválido!").notRequired(),
  phoneNumber: yup.string().notRequired(),
});
