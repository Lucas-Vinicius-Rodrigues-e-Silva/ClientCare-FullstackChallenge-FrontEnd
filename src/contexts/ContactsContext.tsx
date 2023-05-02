import { createContext, useContext, useState } from "react";
import { errorToast } from "../components/ErrorToast";
import { sucessToast } from "../components/SucessToast";
import {
  IContactContext,
  IContactsProviderProps,
  INewContact,
  IUpdateContact,
} from "../interfaces/contactContext";
import { api } from "../services/api";
import { AuthContext } from "./AuthContext";
import { ClientsContext } from "./ClientContext";

export const ContactsContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IContactsProviderProps) => {
  const { contacts, setContacts } = useContext(AuthContext);
  const { clientId } = useContext(ClientsContext);

  const [contactId, setContactId] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhoneNumber, setContactPhoneNumber] = useState("");
  const [isContactsModalActive, setIsContactModalActive] = useState(false);
  const [isContactUpdateModalActive, setIsContactUpdateModalActive] =
    useState(false);
  const [isContactDeleteModalActive, setIsContactDeleteModalActive] =
    useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingUpdateContact, setLoadingUpdateContact] = useState(false);
  const [loadingDeleteContact, setLoadingDeleteContact] = useState(false);

  const handleNewContact = async (data: INewContact) => {
    try {
      setLoading(true);
      console.log(clientId);
      const newContact = await api.post(`/contacts/${clientId}`, data);
      setContacts([newContact.data, ...contacts!]);
      sucessToast("Contato criado com sucesso!");
    } catch (error) {
      errorToast(
        "Não foi possível criar o contato. Tente novamente mais tarde"
      );
      console.log(error);
    } finally {
      setLoading(false);
      setIsContactModalActive(false);
    }
  };

  const handleUpdateContact = async (data: IUpdateContact) => {
    try {
      setLoadingUpdateContact(true);
      const updateContacts = await api.patch(`/contacts/${contactId}`, data);
      const contactToUpdate = contacts?.filter(
        (contact) => contact.id !== contactId
      );
      setContacts([updateContacts.data, ...contactToUpdate!]);
      sucessToast("Contato atualizado com sucesso!");
    } catch (error) {
      console.log(error);
      errorToast(
        "Não foi possível atualizar o contato. Tente novamente mais tarde"
      );
    } finally {
      setLoadingUpdateContact(false);
      setIsContactUpdateModalActive(false);
    }
  };
  const handleDeleteContacts = async () => {
    try {
      setLoadingDeleteContact(true);
      const deleteContact = await api.delete(`contacts/${contactId}`);
      const contactToDelete = contacts?.filter(
        (contact) => contact.id !== contactId
      );
      setContacts([...contactToDelete!]);
      sucessToast("Contato deletado com sucesso!");
    } catch (error) {
      console.log(error);
      errorToast(
        "Não foi póssível deletar o contato. Tente novamente mais tarde"
      );
    } finally {
      setLoadingDeleteContact(false);
      setIsContactDeleteModalActive(false);
    }
  };

  return (
    <ContactsContext.Provider
      value={{
        contactId,
        setContactId,
        contactName,
        setContactName,
        contactEmail,
        setContactEmail,
        contactPhoneNumber,
        setContactPhoneNumber,
        isContactsModalActive,
        setIsContactModalActive,
        isContactUpdateModalActive,
        setIsContactUpdateModalActive,
        isContactDeleteModalActive,
        setIsContactDeleteModalActive,
        loading,
        setLoading,
        loadingUpdateContact,
        setLoadingUpdateContact,
        loadingDeleteContact,
        setLoadingDeleteContact,
        handleNewContact,
        handleUpdateContact,
        handleDeleteContacts,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
