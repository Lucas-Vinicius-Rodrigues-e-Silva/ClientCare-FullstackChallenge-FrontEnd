import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { IRegisterUser } from "../../interfaces/authContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { LoadingPage } from "../../components/Loading";
import { formSchemaRegister } from "../../validations/registerUser";
import { styleInput } from "../../styles/input";
import { styleButton } from "../../styles/button";
import { styleLink } from "../Login/style";
const Register = () => {
  const { handleRegister, loading } = useContext(AuthContext);
  const [seePassword, setSeePassword] = useState("password");
  const backgrounRegister = require("../../img/backgroundRegisterPhoto.jpg");

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
          width={"100vw"}
          height="100vh"
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          bgcolor="transparent"
          style={{
            backgroundImage: `url(${backgrounRegister})`,
            backgroundSize: "100%",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit(handleRegister)}
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            alignItems={"center"}
            bgcolor={"#91a7ff"}
            boxShadow={"3px 3px 3px #748ffcaa"}
            borderRadius={"8px"}
            width="30vw"
            height={"60vh"}
            noValidate
            autoComplete="off"
          >
            <TextField
              label={
                errors.name?.message ? errors.name?.message : "Insira seu nome"
              }
              style={styleInput}
              variant="standard"
              id="name"
              type="text"
              color={errors.name?.message ? "warning" : "primary"}
              focused
              {...register("name")}
            />
            <TextField
              label={
                errors.email?.message
                  ? errors.email?.message
                  : "Insira um email"
              }
              style={styleInput}
              variant="standard"
              id="email"
              type="text"
              color={errors.email?.message ? "warning" : "primary"}
              focused
              {...register("email")}
            />
            <TextField
              label={
                errors.password?.message
                  ? errors.password?.message
                  : "Insira sua senha"
              }
              style={styleInput}
              id="password"
              type={seePassword}
              variant="standard"
              color={errors.password?.message ? "warning" : "primary"}
              focused
              {...register("password")}
            />
            <TextField
              label={
                errors.phoneNumber?.message
                  ? errors.phoneNumber?.message
                  : "Insira seu número de telefone"
              }
              style={styleInput}
              id="phoneNumber"
              type={"text"}
              variant="standard"
              color={errors.phoneNumber?.message ? "warning" : "primary"}
              focused
              {...register("phoneNumber")}
            />
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                disabled={loading}
                type={"submit"}
                style={styleButton}
              >
                {loading ? "Cadastrando..." : "Cadastrar"}
              </Button>
            </Stack>
            <Link to={"/login"} style={styleLink}>
              Já possui uma conta? Faça seu login aqui!
            </Link>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Register;
