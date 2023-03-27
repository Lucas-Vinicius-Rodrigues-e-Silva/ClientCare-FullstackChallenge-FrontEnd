import * as yup from "yup";

export const formSchemaRegister = yup.object().shape({
  name: yup.string().required("O nome é obrigatório!"),
  email: yup
    .string()
    .required("O email é obrigatório!")
    .email("Email inválido!"),
  password: yup
    .string()
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter um caracter especial")
    .matches(/.{8,}/, "Deve ter no minimo 8 digitos")
    .required("A senha é obrigatória!"),
  phoneNumber: yup.string().required("O telefone é obrigatório!"),
});
