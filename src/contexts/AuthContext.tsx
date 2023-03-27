import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorToast } from "../components/ErrorToast";
import { sucessToast } from "../components/SucessToast";
import {
  IAuthContext,
  IAuthProviderProps,
  IClients,
  IContacts,
  ILoginUser,
  IRegisterUser,
  IUser,
} from "../interfaces/authContext";
import { api } from "../services/api";

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(true);
  const [user, setUser] = useState<IUser | null>(null);
  const [clients, setClients] = useState<IClients[] | null>(null);
  const [contacts, setContacts] = useState<IContacts | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("ClientCareToken");
      const userId = localStorage.getItem("ClientCareId");
      if (token && userId) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get(`/users/${userId}`);
          setUser(data);
          // const { data } = await api.get(`/clients`)
        } catch (error) {
          console.log(error);
        }
      } else {
        navigate("/login");
      }
      setUserLoading(false);
    }
    loadUser();
  }, []);

  const handleLogin = async (data: ILoginUser) => {
    try {
      setLoading(true);
      const response = await api.post("/login", data);
      const { user: userResponse, token } = response.data;
      api.defaults.headers.authorization = `Bearer ${token}`;
      setUser(userResponse);
      const contacts: any = await api.get("/clients");
      console.log(contacts);
      setClients(contacts);
      localStorage.setItem("ClientCareToken", token);
      localStorage.setItem("ClientCareId", userResponse.id);
      sucessToast("Login feito com sucesso!");
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.log("Não foi possível efetuar o login.");
      errorToast(
        "Não foi possível efetuar o login. Confira os dados e tente novamente"
      );
    } finally {
      setLoading(false);
    }
  };
  const handleRegister = async (data: IRegisterUser) => {
    try {
      setLoading(true);
      const response = await api.post("/users", data);
      sucessToast("Cadastro feito com sucesso!");
      navigate("/login");
    } catch (error) {
      console.log("Não foi possível registar o usuário.");
      errorToast("Não foi possível registar o usuário.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        setUser,
        userLoading,
        clients,
        setClients,
        contacts,
        setContacts,
        navigate,
        handleLogin,
        handleRegister,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
