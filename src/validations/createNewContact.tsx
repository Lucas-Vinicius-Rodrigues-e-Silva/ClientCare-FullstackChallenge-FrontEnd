import * as yup from "yup";

export const formSchemaCreateNewContact = yup.object().shape({
  name: yup.string().required("O nome do contato é obrigatório!"),
  email: yup
    .string()
    .required("O email do contato é obrigatório!")
    .email("Email inválido!"),
  phoneNumber: yup.string().required("O telefone do contato é obrigatório!"),
});
