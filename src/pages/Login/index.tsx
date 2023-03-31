import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import { ILoginUser } from "../../interfaces/authContext";
import { formSchemaLogin } from "../../validations/loginUser";
import { LoadingPage } from "../../components/Loading";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { styleButton } from "../../styles/button";
import { styleInput } from "../../styles/input";
import { styleLink } from "./style";

const Login = () => {
  const logo = require("../../img/backgroundPhoto.jpg");
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
        <Box>
          <Box
            width={"100vw"}
            height="100vh"
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            bgcolor="transparent"
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: "100%",
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit(handleLogin)}
              display="flex"
              flexDirection="column"
              justifyContent={"center"}
              alignItems={"center"}
              bgcolor={"#91a7ff"}
              boxShadow={"3px 3px 3px #748ffcaa"}
              borderRadius={"8px"}
              width="30vw"
              height={"50vh"}
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <Typography
                component="div"
                variant="h5"
                minWidth={"80%"}
                color="white"
              >
                Client Care
              </Typography>

              <TextField
                style={styleInput}
                label={
                  errors.email?.message
                    ? errors.email?.message
                    : "Insira seu email"
                }
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
                id="password"
                type={seePassword}
                variant="standard"
                style={styleInput}
                color={errors.password?.message ? "warning" : "primary"}
                focused
                {...register("password")}
              />
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  disabled={loading}
                  type={"submit"}
                  style={styleButton}
                >
                  {loading ? "Entrando..." : "Entrar"}
                </Button>
              </Stack>
              <Link to={"/register"} style={styleLink}>
                Ainda não tem uma conta? Cadastre-se aqui!
              </Link>
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Login;
