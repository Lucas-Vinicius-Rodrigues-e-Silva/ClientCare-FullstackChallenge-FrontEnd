import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ClientsContext } from "../../contexts/ClientContext";
import { INewClient } from "../../interfaces/clientContext";
import { formSchemaCreateNewClient } from "../../validations/createNewClient";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { style } from "./style";
import { styleButton } from "../../styles/button";
import { styleInputModal } from "../../styles/inputModal";

export const NewClientModal = () => {
  const {
    isClientModalActive,
    setIsClientModalActive,
    loading,
    handleNewClient,
  } = useContext(ClientsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewClient>({
    resolver: yupResolver(formSchemaCreateNewClient),
  });

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isClientModalActive}
        onClose={() => setIsClientModalActive(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isClientModalActive}>
          <Box
            sx={style}
            component="form"
            onSubmit={handleSubmit(handleNewClient)}
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            alignItems={"center"}
            bgcolor={"#91a7ff"}
            boxShadow={"3px 3px 3px #748ffcaa"}
            borderRadius={"8px"}
            width="30vw"
            height={"35vh"}
          >
            <TextField
              label={
                errors.name?.message
                  ? errors.name?.message
                  : "Insira o nome do cliente"
              }
              variant="standard"
              id="name"
              type="text"
              color={errors.name?.message ? "warning" : "primary"}
              focused
              style={styleInputModal}
              {...register("name")}
            />
            <TextField
              label={
                errors.email?.message
                  ? errors.email?.message
                  : "Insira o email do cliente"
              }
              variant="standard"
              id="email"
              type="text"
              color={errors.email?.message ? "warning" : "primary"}
              focused
              style={styleInputModal}
              {...register("email")}
            />
            <TextField
              label={
                errors.phoneNumber?.message
                  ? errors.phoneNumber?.message
                  : "Insira o número de telefone do cliente"
              }
              id="phoneNumber"
              type={"text"}
              variant="standard"
              color={errors.phoneNumber?.message ? "warning" : "primary"}
              focused
              style={styleInputModal}
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
                {loading ? "Criando..." : "Criar"}
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
