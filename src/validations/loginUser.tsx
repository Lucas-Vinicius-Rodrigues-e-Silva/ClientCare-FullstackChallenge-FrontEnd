import * as yup from "yup";

export const formSchemaLogin = yup.object().shape({
  email: yup
    .string()
    .required("O email é obrigatório!")
    .email("Email invalido!"),
  password: yup.string().required("A senha é obrigatória!"),
});
