import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { IRegisterUser } from "../../interfaces/authContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { LoadingPage } from "../../components/Loading";
import { formSchemaRegister } from "../../validations/registerUser";
const Register = () => {
  const { handleRegister, loading } = useContext(AuthContext);
  const [seePassword, setSeePassword] = useState("password");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    resolver: yupResolver(formSchemaRegister),
  });

  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <Box
          component="form"
          onSubmit={handleSubmit(handleRegister)}
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label={
              errors.name?.message ? errors.name?.message : "Insira seu nome"
            }
            variant="standard"
            id="name"
            type="text"
            color={errors.name?.message ? "warning" : "success"}
            focused
            {...register("name")}
          />
          <TextField
            label={
              errors.email?.message ? errors.email?.message : "Insira um email"
            }
            variant="standard"
            id="email"
            type="text"
            color={errors.email?.message ? "warning" : "success"}
            focused
            {...register("email")}
          />
          <TextField
            label={
              errors.password?.message
                ? errors.password?.message
                : "Insira sua senha"
            }
            id="password"
            type={seePassword}
            variant="standard"
            color={errors.password?.message ? "warning" : "success"}
            focused
            {...register("password")}
          />
          <TextField
            label={
              errors.phoneNumber?.message
                ? errors.phoneNumber?.message
                : "Insira seu número de telefone"
            }
            id="phoneNumber"
            type={"text"}
            variant="standard"
            color={errors.phoneNumber?.message ? "warning" : "success"}
            focused
            {...register("phoneNumber")}
          />
          <button disabled={loading} type={"submit"}>
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>
        </Box>
      )}
      <button>
        <Link to={"/login"}>Login</Link>
      </button>
    </div>
  );
};

export default Register;
