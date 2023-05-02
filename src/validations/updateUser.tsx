import * as yup from "yup";

export const formSchemaUpdateUser = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email("Email inválido!").notRequired(),
  password: yup.string().notRequired(),
  phoneNumber: yup.string().notRequired(),
});
