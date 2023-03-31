import * as yup from "yup";

export const formSchemaUpdateClient = yup.object().shape({
  name: yup
    .string()
    .required(
      "Insira alguma informação para poder atualizar o nome do cliente!"
    ),
  email: yup
    .string()
    .required(
      "Insira alguma informação para poder atualizar o email do cliente!"
    )
    .email("Email inválido!"),
  phoneNumber: yup
    .string()
    .required(
      "Insira alguma informação para poder atualizar o telefone do cliente!"
    ),
});
