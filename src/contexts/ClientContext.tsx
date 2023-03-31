import { createContext, useContext, useState } from "react";
import { errorToast } from "../components/ErrorToast";
import { sucessToast } from "../components/SucessToast";
import {
  IClientContext,
  IClientsProviderProps,
  INewClient,
  IUpdateClient,
} from "../interfaces/clientContext";
import { api } from "../services/api";
import { AuthContext } from "./AuthContext";

export const ClientsContext = createContext({} as IClientContext);

export const ClientsProvider = ({ children }: IClientsProviderProps) => {
  const { navigate, userLoading, setUser, clients, setClients } =
    useContext(AuthContext);
  const [clientId, setClientId] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhoneNumber, setClientPhoneNumber] = useState("");
  const [isClientModalActive, setIsClientModalActive] = useState(false);
  const [isClientUpdateModalActive, setIsClientUpdateModalActive] =
    useState(false);
  const [isClientDeleteModalActive, setIsClientDeleteModalActive] =
    useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingUpdateClient, setLoadingUpdateClient] = useState(false);
  const [loadingDeleteClient, setLoadingDeleteClient] = useState(false);

  const exit = (): void => {
    setUser(null);
    localStorage.removeItem("ClientCareToken");
    localStorage.removeItem("ClientCareId");
    navigate("/login");
    sucessToast("Logout realizado com sucesso!");
  };
  if (userLoading) {
    return null;
  }

  const handleNewClient = async (data: INewClient) => {
    try {
      setLoading(true);
      const newClient = await api.post("/clients", data);
      setClients([newClient.data, ...clients!]);
      sucessToast("Cliente criado com sucesso!");
    } catch (error) {
      console.log(error);
      errorToast(
        "Não foi possível criar o cliente. Tente novamente mais tarde"
      );
    } finally {
      setLoading(false);
      setIsClientModalActive(false);
    }
  };

  const handleUpdateClients = async (data: IUpdateClient) => {
    try {
      setLoadingUpdateClient(true);
      const updateClients = await api.patch(`/clients/${clientId}`, data);
      const clientToUpdate = clients?.filter(
        (client) => client.id !== clientId
      );
      setClients([updateClients.data, ...clientToUpdate!]);
      sucessToast("Cliente atualizado com sucesso!");
    } catch (error) {
      console.log(error);
      errorToast(
        "Não foi possível atualizar o cliente. Tente novamente mais tarde"
      );
    } finally {
      setLoadingUpdateClient(false);
      setIsClientUpdateModalActive(false);
    }
  };

  const handleDeleteClients = async () => {
    try {
      setLoadingDeleteClient(true);
      const deleteClient = api.delete(`clients/${clientId}`);
      const clientToDelete = clients?.filter(
        (client) => client.id !== clientId
      );
      setClients([...clientToDelete!]);
      sucessToast("Cliente deletado com sucesso!");
    } catch (error) {
      console.log(error);
      errorToast(
        "Não foi possível deletar o cliente. Tente novamente mais tarde"
      );
    } finally {
      setLoadingDeleteClient(false);
      setIsClientDeleteModalActive(false);
    }
  };

  return (
    <ClientsContext.Provider
      value={{
        clientId,
        setClientId,
        clientName,
        setClientName,
        clientEmail,
        setClientEmail,
        clientPhoneNumber,
        setClientPhoneNumber,
        isClientUpdateModalActive,
        setIsClientUpdateModalActive,
        isClientDeleteModalActive,
        setIsClientDeleteModalActive,
        isClientModalActive,
        setIsClientModalActive,
        loading,
        setLoading,
        loadingUpdateClient,
        setLoadingUpdateClient,
        loadingDeleteClient,
        setLoadingDeleteClient,
        exit,
        handleNewClient,
        handleUpdateClients,
        handleDeleteClients,
      }}
    >
      {children}
    </ClientsContext.Provider>
  );
};
