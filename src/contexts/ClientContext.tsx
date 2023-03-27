import { createContext, useContext, useState } from "react";
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
  const [clientPhoneNumber, setClientPhoneNumber] = useState("");
  const [isContactsModalActive, setIsContactModalActive] = useState(false);
  const [isClientModalActive, setIsClientModalActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingUpdateClient, setLoadingUpdateClient] = useState(false);
  const [loadingDeleteClient, setLoadingDeleteClient] = useState(false);

  const exit = (): void => {
    setUser(null);
    localStorage.removeItem("ClientCareToken");
    localStorage.removeItem("ClientCareId");
    navigate("/login");
  };
  if (userLoading) {
    return null;
  }

  const handleNewClient = async (data: INewClient) => {
    try {
      setLoading(true);
      const newClient = await api.post("/clients", data);
      setClients([newClient.data, ...clients!]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setIsClientModalActive(false);
    }
  };

  const handleUpdateClients = async (data: IUpdateClient) => {
    try {
      setLoadingUpdateClient(true);
      const updateClients = await api.patch(`/clients/${clientId}`, data);
      // const deleteOldClientIndex = clients?.findIndex(
      //   (client) => client.id === clientId
      // );
      const clientToUpdate = clients?.filter(
        (client) => client.id === clientId
      );
      setClients([updateClients.data, ...clientToUpdate!]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingUpdateClient(false);
      setIsClientModalActive(false);
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
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingDeleteClient(false);
      setIsClientModalActive(false);
    }
  };

  return (
    <ClientsContext.Provider
      value={{
        clientId,
        setClientId,
        clientName,
        setClientName,
        clientPhoneNumber,
        setClientPhoneNumber,
        isContactsModalActive,
        setIsContactModalActive,
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
