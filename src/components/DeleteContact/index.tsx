import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useContext } from "react";
import { ContactsContext } from "../../contexts/ContactsContext";
import { styleDeleteContact } from "./style";

export const DeleteContactModal = () => {
  const {
    isContactDeleteModalActive,
    setIsContactDeleteModalActive,
    loadingDeleteContact,
    handleDeleteContacts,
  } = useContext(ContactsContext);

  return (
    <div>
      <Modal
        open={isContactDeleteModalActive}
        onClose={() => setIsContactDeleteModalActive(false)}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isContactDeleteModalActive}>
          <Box sx={styleDeleteContact}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Tem certeza que deseja excluir o cliente?
            </Typography>
            <Button
              variant="contained"
              endIcon={<DeleteOutlinedIcon />}
              disabled={loadingDeleteContact}
              type={"submit"}
              onClick={() => handleDeleteContacts()}
            >
              {loadingDeleteContact ? "Deletando..." : "Deletar"}
            </Button>
            <Button
              variant="contained"
              endIcon={<CloseIcon />}
              type={"submit"}
              onClick={() => setIsContactDeleteModalActive(false)}
            >
              Cancelar
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
