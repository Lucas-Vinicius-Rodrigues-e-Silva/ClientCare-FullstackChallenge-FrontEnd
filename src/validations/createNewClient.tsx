import * as yup from "yup";

export const formSchemaCreateNewClient = yup.object().shape({
  name: yup.string().required("O nome do cliente é obrigatório!"),
  email: yup
    .string()
    .required("O email do cliente é obrigatório!")
    .email("Email inválido!"),
  phoneNumber: yup.string().required("O telefone do cliente é obrigatório!"),
});
