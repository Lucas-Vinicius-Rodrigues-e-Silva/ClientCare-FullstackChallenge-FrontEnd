import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ContactsIcon from "@mui/icons-material/Contacts";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MenuItem from "@mui/material/MenuItem";
import { useContext, useState } from "react";
import { ClientsContext } from "../../contexts/ClientContext";
import { IListClients } from "../../interfaces/clientContext";
import { ExpandMore } from "./style";
import { UpdateClientModal } from "../UpdateClientModal";
import { DeleteClientModal } from "../DeleteClientModal";
import { AuthContext } from "../../contexts/AuthContext";
import { IContacts } from "../../interfaces/authContext";
import { AllContacts } from "../AllContacts";
import { ContactsContext } from "../../contexts/ContactsContext";
import { NewContactModal } from "../NewContactModal";
import { styleCard } from "../../styles/cardContent";
import { StyledMenu } from "../../styles/menu";
import { StyledListContacts } from "../../styles/contactList";

export const AllClients = ({ id, name, email, phoneNumber }: IListClients) => {
  const {
    isClientUpdateModalActive,
    isClientDeleteModalActive,
    setIsClientUpdateModalActive,
    setIsClientDeleteModalActive,
    setClientId,
    setClientName,
    setClientEmail,
    setClientPhoneNumber,
  } = useContext(ClientsContext);

  const { contacts } = useContext(AuthContext);

  const { isContactsModalActive, setIsContactModalActive } =
    useContext(ContactsContext);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const defineUpdateClientStates = (): void => {
    setIsClientUpdateModalActive(true);
    setClientId(id);
    setClientName(name);
    setClientEmail(email);
    setClientPhoneNumber(phoneNumber);
    handleClose();
  };

  const defineDeleteClientStates = (): void => {
    setIsClientDeleteModalActive(true);
    setClientId(id);
    setClientName(name);
    setClientEmail(email);
    setClientPhoneNumber(phoneNumber);
    handleClose();
  };

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setClientId(id);
  };

  const handleLeavePointer = () => {
    expanded && setExpanded(false);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Card
      sx={{
        maxWidth: 450,
        minWidth: 300,
        minHeight: "40%",
        maxHeight: "90%",
        marginRight: "2rem",
      }}
      onPointerLeave={() => handleLeavePointer()}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#91a7ff" }} aria-label="recipe">
            <ContactsIcon />
          </Avatar>
        }
        action={
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
                onClick={() => defineUpdateClientStates()}
                disableRipple
              >
                <EditIcon />
                Update
              </MenuItem>
              <MenuItem
                onClick={() => defineDeleteClientStates()}
                disableRipple
              >
                <FileCopyIcon />
                Delete
              </MenuItem>
            </StyledMenu>
          </div>
        }
        title={name}
        // subheader={id}
      />
      <CardContent style={styleCard}>
        <Typography variant="body2" color="text.secondary">
          Email:{email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Telefone: {phoneNumber}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {isClientUpdateModalActive && <UpdateClientModal />}
        {isClientDeleteModalActive && <DeleteClientModal />}
        {isContactsModalActive && <NewContactModal />}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {contacts?.length === 0 ? (
            <>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  href="#outlined-buttons"
                  onClick={() => setIsContactModalActive(true)}
                >
                  Cadastrar novo Contato
                </Button>
              </Stack>
              {isContactsModalActive && <NewContactModal />}
            </>
          ) : (
            <StyledListContacts>
              {contacts?.map(
                ({
                  id,
                  name,
                  email,
                  phoneNumber,
                  clientWhoBelongs,
                }: IContacts) => (
                  <AllContacts
                    key={id}
                    id={id}
                    name={name}
                    email={email}
                    phoneNumber={phoneNumber}
                    clientWhoBelongsId={clientWhoBelongs.id}
                  />
                )
              )}
            </StyledListContacts>
          )}
          <Stack
            direction="row"
            spacing={2}
            marginTop={"1rem"}
            marginBottom={"1rem"}
          >
            <Button
              variant="outlined"
              href="#outlined-buttons"
              onClick={() => setIsContactModalActive(true)}
            >
              Cadastrar novo Contato
            </Button>
          </Stack>
        </CardContent>
      </Collapse>
    </Card>
  );
};
