import { ReactNode } from "react";
import { NavigateFunction } from "react-router-dom";

export interface IAuthProviderProps {
  children: ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  isAdm: boolean;
  isActive: boolean;
  phoneNumber: string;
  registryDate: Date;
  deletedAt: Date | null;
}

export interface IClients {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  phoneNumber: string;
  registryDate: Date;
  deletedAt: Date | null;
  userWhoAdd: {
    id: string;
    name: string;
    email: string;
  };
}

export interface IContacts {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  phoneNumber: string;
  registryDate: Date;
  deletedAt: Date | null;
  clientWhoBelongs: {
    id: string;
    name: string;
    email: string;
  };
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export interface IAuthContext {
  loading: true | false;
  userLoading: true | false;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  clients: IClients[] | null;
  setClients: React.Dispatch<React.SetStateAction<IClients[] | null>>;
  contacts: IContacts | null;
  setContacts: React.Dispatch<React.SetStateAction<IContacts | null>>;
  navigate: NavigateFunction;
  handleLogin: (data: ILoginUser) => void;
  handleRegister: (data: IRegisterUser) => void;
}
