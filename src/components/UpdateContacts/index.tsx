import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { styleUpdateContact } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ContactsContext } from "../../contexts/ContactsContext";
import { IUpdateContact } from "../../interfaces/contactContext";
import { formSchemaUpdateContact } from "../../validations/updateContact";
import { styleInputModal } from "../../styles/inputModal";
import { styleButton } from "../../styles/button";

export const UpdateContactModal = () => {
  const {
    isContactUpdateModalActive,
    setIsContactUpdateModalActive,
    loadingUpdateContact,
    handleUpdateContact,
  } = useContext(ContactsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateContact>({
    resolver: yupResolver(formSchemaUpdateContact),
  });

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isContactUpdateModalActive}
        onClose={() => setIsContactUpdateModalActive(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isContactUpdateModalActive}>
          <Box
            sx={styleUpdateContact}
            component="form"
            onSubmit={handleSubmit(handleUpdateContact)}
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
                  : "Insira o nome para o qual deseja atualizar"
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
                  : "Insira o email para o qual deseja atualizar"
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
                  : "Insira o número de telefone para o qual deseja atualizar"
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
                disabled={loadingUpdateContact}
                type={"submit"}
                style={styleButton}
              >
                {loadingUpdateContact ? "Atualizando..." : "Atualizar"}
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
