import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ILoginUser } from "../../interfaces/authContext";
import { formSchemaLogin } from "../../validations/loginUser";
import { LoadingPage } from "../../components/Loading";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const Login = () => {
  const { handleLogin, loading } = useContext(AuthContext);
  const [seePassword, setSeePassword] = useState("password");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>({ resolver: yupResolver(formSchemaLogin) });
  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <Box
          component="form"
          onSubmit={handleSubmit(handleLogin)}
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label={
              errors.email?.message ? errors.email?.message : "Insira seu email"
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
          <button disabled={loading} type={"submit"}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </Box>
      )}
      <button>
        <Link to={"/register"}>Cadastro</Link>
      </button>
    </div>
  );
};

export default Login;
