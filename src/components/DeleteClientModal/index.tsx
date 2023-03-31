import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useContext } from "react";
import { ClientsContext } from "../../contexts/ClientContext";
import { styleDelete } from "./style";

export const DeleteClientModal = () => {
  const {
    isClientDeleteModalActive,
    setIsClientDeleteModalActive,
    loadingDeleteClient,
    handleDeleteClients,
  } = useContext(ClientsContext);

  return (
    <div>
      <Modal
        open={isClientDeleteModalActive}
        onClose={() => setIsClientDeleteModalActive(false)}
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
        <Fade in={isClientDeleteModalActive}>
          <Box sx={styleDelete} flexDirection={"column"}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Tem certeza que deseja excluir o cliente?
            </Typography>
            <Button
              variant="contained"
              endIcon={<DeleteOutlinedIcon />}
              disabled={loadingDeleteClient}
              type={"submit"}
              onClick={() => handleDeleteClients()}
            >
              {loadingDeleteClient ? "Deletando..." : "Deletar"}
            </Button>
            <Button
              variant="contained"
              endIcon={<CloseIcon />}
              type={"submit"}
              onClick={() => setIsClientDeleteModalActive(false)}
            >
              Cancelar
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
