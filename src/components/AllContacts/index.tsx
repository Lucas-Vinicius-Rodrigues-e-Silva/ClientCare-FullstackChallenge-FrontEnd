import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { useContext, useState } from "react";
import { ContactsContext } from "../../contexts/ContactsContext";
import { IListContacts } from "../../interfaces/contactContext";
import { ClientsContext } from "../../contexts/ClientContext";
import { UpdateContactModal } from "../UpdateContacts";
import { DeleteContactModal } from "../DeleteContact";
import { NewContactModal } from "../NewContactModal";
import { StyledMenu } from "../../styles/menu";

export const AllContacts = ({
  id,
  name,
  email,
  phoneNumber,
  clientWhoBelongsId,
}: IListContacts) => {
  const {
    isContactsModalActive,
    isContactUpdateModalActive,
    setIsContactUpdateModalActive,
    isContactDeleteModalActive,
    setIsContactDeleteModalActive,
    setContactId,
    setContactName,
    setContactEmail,
    setContactPhoneNumber,
  } = useContext(ContactsContext);

  const { clientId } = useContext(ClientsContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const defineUpdateContactstStates = (): void => {
    setIsContactUpdateModalActive(true);
    setContactId(id);
    setContactName(name);
    setContactEmail(email);
    setContactPhoneNumber(phoneNumber);
    handleClose();
  };

  const defineDeleteContactStates = (): void => {
    setIsContactDeleteModalActive(true);
    setContactId(id);
    setContactName(name);
    setContactEmail(email);
    setContactPhoneNumber(phoneNumber);
    handleClose();
  };

  const theme = useTheme();

  return (
    <>
      {clientWhoBelongsId === clientId && (
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "95%",
            width: "95%",
            minWidth: "95%",
            marginBottom: "1rem",
            marginRight: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              maxWidth: "100%",
              width: "100%",
            }}
          >
            <CardContent sx={{ flex: "1 0 auto", width: "100%" }}>
              <Box display={"flex"} width={"100%"}>
                <Typography component="div" variant="h5" width={"70%"}>
                  {name}
                </Typography>
                <div>
                  <Button
                    id="demo-customized-button"
                    aria-controls={open ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    disableElevation
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </Button>
                  <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      "aria-labelledby": "demo-customized-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem
                      onClick={() => defineUpdateContactstStates()}
                      disableRipple
                    >
                      <EditIcon />
                      Update
                    </MenuItem>
                    <MenuItem
                      onClick={() => defineDeleteContactStates()}
                      disableRipple
                    >
                      <FileCopyIcon />
                      Delete
                    </MenuItem>
                  </StyledMenu>
                </div>
              </Box>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {email}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {phoneNumber}
              </Typography>
              {isContactUpdateModalActive && <UpdateContactModal />}
              {isContactsModalActive && <NewContactModal />}
              {isContactDeleteModalActive && <DeleteContactModal />}
            </CardContent>
          </Box>
        </Card>
      )}
    </>
  );
};
