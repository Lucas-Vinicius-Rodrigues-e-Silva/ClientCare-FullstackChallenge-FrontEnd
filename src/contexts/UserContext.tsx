import { createContext, useContext, useState } from "react";
import { errorToast } from "../components/ErrorToast";
import { sucessToast } from "../components/SucessToast";
import {
  IUpdateUser,
  IUserContext,
  IUserProviderProps,
} from "../interfaces/userContext";
import { api } from "../services/api";
import { AuthContext } from "./AuthContext";
import { ClientsContext } from "./ClientContext";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [isUpdateUserModalActive, setIsUpdateUserModalActive] = useState(false);
  const [isDeleteUserModalActive, setIsDeleteUserModalActive] = useState(false);
  const [loadingUpdateUser, setLoadingUpdateUser] = useState(false);
  const [loadingDeleteUser, setLoadingDeleteUser] = useState(false);

  const { setUser } = useContext(AuthContext);
  const { exit } = useContext(ClientsContext);

  const handleUpdateUser = async (data: IUpdateUser) => {
    try {
      const userId = localStorage.getItem("ClientCareId");
      setLoadingUpdateUser(true);
      const userToUpdate: any = await api.patch(`/users/${userId}`, data);
      setUser(userToUpdate.data!);
      sucessToast("Suas informações foram atualizadas com sucesso!");
    } catch (error) {
      console.log(error);
      errorToast(
        "Não foi possível atualizar suas informações. Tente novamente mais tarde"
      );
    } finally {
      setLoadingUpdateUser(false);
      setIsUpdateUserModalActive(false);
    }
  };

  const handleDeleteUser = async () => {
    try {
      const userId = localStorage.getItem("ClientCareId");
      setLoadingDeleteUser(true);
      const deleteUser = await api.delete(`/users/${userId}`);
      setUser(null);
      sucessToast("Seu cadastro foi deletado com sucesso! Redirecionando...");
      exit();
    } catch (error) {
      console.log(error);
      errorToast(
        "Não foi possível deletar seu cadastro. Tente novamente mais tarde"
      );
    } finally {
      setLoadingDeleteUser(false);
      setIsDeleteUserModalActive(false);
    }
  };
  return (
    <UserContext.Provider
      value={{
        isUpdateUserModalActive,
        setIsUpdateUserModalActive,
        isDeleteUserModalActive,
        setIsDeleteUserModalActive,
        loadingUpdateUser,
        setLoadingUpdateUser,
        loadingDeleteUser,
        setLoadingDeleteUser,
        handleUpdateUser,
        handleDeleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
