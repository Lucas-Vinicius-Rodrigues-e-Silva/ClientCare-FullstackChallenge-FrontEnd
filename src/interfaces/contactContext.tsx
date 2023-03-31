import { ReactNode } from "react";

export interface IContactsProviderProps {
  children: ReactNode;
}

export interface INewContact {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface IListContacts {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  clientWhoBelongsId: string;
}

export interface IUpdateContact {
  name?: string;
  email?: string;
  phoneNumber?: string;
}

export interface IContactContext {
  contactId: string;
  setContactId: React.Dispatch<React.SetStateAction<string>>;
  contactName: string;
  setContactName: React.Dispatch<React.SetStateAction<string>>;
  contactEmail: string;
  setContactEmail: React.Dispatch<React.SetStateAction<string>>;
  contactPhoneNumber: string;
  setContactPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  isContactsModalActive: boolean;
  setIsContactModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  isContactUpdateModalActive: boolean;
  setIsContactUpdateModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  isContactDeleteModalActive: boolean;
  setIsContactDeleteModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loadingUpdateContact: boolean;
  setLoadingUpdateContact: React.Dispatch<React.SetStateAction<boolean>>;
  loadingDeleteContact: boolean;
  setLoadingDeleteContact: React.Dispatch<React.SetStateAction<boolean>>;
  handleNewContact: (data: INewContact) => Promise<void>;
  handleUpdateContact: (data: IUpdateContact) => Promise<void>;
  handleDeleteContacts: () => Promise<void>;
}
