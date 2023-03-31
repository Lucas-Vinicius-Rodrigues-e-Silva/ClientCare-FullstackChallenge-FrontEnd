import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { styleUpdate } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ClientsContext } from "../../contexts/ClientContext";
import { IUpdateClient } from "../../interfaces/clientContext";
import { formSchemaUpdateClient } from "../../validations/updateClient";
import { styleInputModal } from "../../styles/inputModal";
import { styleButton } from "../../styles/button";

export const UpdateClientModal = () => {
  const {
    isClientUpdateModalActive,
    setIsClientUpdateModalActive,
    loadingUpdateClient,
    handleUpdateClients,
  } = useContext(ClientsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateClient>({
    resolver: yupResolver(formSchemaUpdateClient),
  });

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isClientUpdateModalActive}
        onClose={() => setIsClientUpdateModalActive(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isClientUpdateModalActive}>
          <Box
            sx={styleUpdate}
            component="form"
            onSubmit={handleSubmit(handleUpdateClients)}
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
                  : "Insira o nome para atualizar"
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
                  : "Insira o email para atualizar"
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
                  : "Insira o número de telefone que deseja atualizar"
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
                disabled={loadingUpdateClient}
                type={"submit"}
                style={styleButton}
              >
                {loadingUpdateClient ? "Atualizando..." : "Atualizar"}
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
