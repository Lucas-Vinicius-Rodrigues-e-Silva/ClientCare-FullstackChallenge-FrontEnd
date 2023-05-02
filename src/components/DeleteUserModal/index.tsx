import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useContext } from "react";
import { styleDeleteUser } from "./style";
import { UserContext } from "../../contexts/UserContext";

export const DeleteUserModal = () => {
  const {
    isDeleteUserModalActive,
    setIsDeleteUserModalActive,
    loadingDeleteUser,
    handleDeleteUser,
  } = useContext(UserContext);

  const teste = () => {
    setIsDeleteUserModalActive(false);
    console.log(isDeleteUserModalActive);
  };

  return (
    <div>
      <Modal
        open={isDeleteUserModalActive}
        onClose={() => setIsDeleteUserModalActive(false)}
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
        <Fade in={isDeleteUserModalActive}>
          <Box sx={styleDeleteUser} flexDirection={"column"}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Tem certeza que deseja excluir o seu usuário?
            </Typography>
            <Button
              variant="contained"
              endIcon={<DeleteOutlinedIcon />}
              disabled={loadingDeleteUser}
              type={"submit"}
              onClick={() => handleDeleteUser()}
            >
              {loadingDeleteUser ? "Deletando..." : "Deletar"}
            </Button>
            <Button
              variant="contained"
              endIcon={<CloseIcon />}
              type={"submit"}
              onClick={() => teste()}
            >
              Cancelar
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
