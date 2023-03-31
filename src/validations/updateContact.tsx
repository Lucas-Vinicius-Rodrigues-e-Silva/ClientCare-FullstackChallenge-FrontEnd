import * as yup from "yup";

export const formSchemaUpdateContact = yup.object().shape({
  name: yup
    .string()
    .required(
      "Insira alguma informação para poder atualizar o nome do contato!"
    ),
  email: yup
    .string()
    .required(
      "Insira alguma informação para poder atualizar o email do contato!"
    )
    .email("Email inválido!"),
  phoneNumber: yup
    .string()
    .required(
      "Insira alguma informação para poder atualizar o telefone do contato!"
    ),
});
