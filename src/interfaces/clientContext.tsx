import { ReactNode } from "react";

export interface IClientsProviderProps {
  children: ReactNode;
}

export interface INewClient {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface IUpdateClient {
  name?: string;
  email?: string;
  phoneNumber?: string;
}

export interface IClientContext {
  clientId: string;
  setClientId: React.Dispatch<React.SetStateAction<string>>;
  clientName: string;
  setClientName: React.Dispatch<React.SetStateAction<string>>;
  clientPhoneNumber: string;
  setClientPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  isContactsModalActive: boolean;
  setIsContactModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  isClientModalActive: boolean;
  setIsClientModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loadingUpdateClient: boolean;
  setLoadingUpdateClient: React.Dispatch<React.SetStateAction<boolean>>;
  loadingDeleteClient: boolean;
  setLoadingDeleteClient: React.Dispatch<React.SetStateAction<boolean>>;
  exit: () => void;
  handleNewClient: (data: INewClient) => Promise<void>;
  handleUpdateClients: (data: IUpdateClient) => Promise<void>;
  handleDeleteClients: () => Promise<void>;
}
