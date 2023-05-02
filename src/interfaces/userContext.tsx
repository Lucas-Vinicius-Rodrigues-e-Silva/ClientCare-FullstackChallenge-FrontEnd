import { ReactNode } from "react";

export interface IUserProviderProps {
  children: ReactNode;
}

export interface IUpdateUser {
  name?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
}

export interface IUserContext {
  isUpdateUserModalActive: boolean;
  setIsUpdateUserModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  isDeleteUserModalActive: boolean;
  setIsDeleteUserModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  loadingUpdateUser: boolean;
  setLoadingUpdateUser: React.Dispatch<React.SetStateAction<boolean>>;
  loadingDeleteUser: boolean;
  setLoadingDeleteUser: React.Dispatch<React.SetStateAction<boolean>>;
  handleUpdateUser: (data: IUpdateUser) => Promise<void>;
  handleDeleteUser: () => Promise<void>;
}
