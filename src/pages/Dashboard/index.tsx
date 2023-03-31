import { ChangeEvent, MouseEvent, useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AllClients } from "../../components/AllClients";
import { NewClientModal } from "../../components/NewClientModal";
import { AuthContext } from "../../contexts/AuthContext";
import { ClientsContext } from "../../contexts/ClientContext";
import { IClients } from "../../interfaces/authContext";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { StyledListClients } from "./style";

const Dashboard = () => {
  const { exit, isClientModalActive, setIsClientModalActive } =
    useContext(ClientsContext);
  const { user, clients } = useContext(AuthContext);
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
    exit();
  };

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {user ? (
        <Box>
          <Box sx={{ flexGrow: 1 }}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={auth}
                    onChange={handleChange}
                    aria-label="login switch"
                  />
                }
                label={auth ? "Logout" : "Login"}
              />
            </FormGroup>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {user.name}
                </Typography>
                {auth && (
                  <Box maxHeight={"15vh"}>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>Upate info</MenuItem>
                    </Menu>
                  </Box>
                )}
              </Toolbar>
            </AppBar>
          </Box>
          <Box
            display="flex"
            flexDirection={"column"}
            height={"85vh"}
            alignItems="center"
          >
            <Stack direction="row" spacing={2} marginTop={"2rem"}>
              <Button
                variant="outlined"
                href="#outlined-buttons"
                onClick={() => setIsClientModalActive(true)}
              >
                Cadastrar novo cliente
              </Button>
            </Stack>
            {isClientModalActive && <NewClientModal />}
            {clients?.length === 0 ? (
              "Nenhum cliente para chamar de seu :/"
            ) : (
              <StyledListClients>
                {clients?.map(({ id, name, email, phoneNumber }: IClients) => (
                  <AllClients
                    key={id}
                    id={id}
                    name={name}
                    email={email}
                    phoneNumber={phoneNumber}
                  />
                ))}
              </StyledListClients>
            )}
          </Box>
        </Box>
      ) : (
        <Navigate to={"/login"} replace />
      )}
    </>
  );
};

export default Dashboard;
