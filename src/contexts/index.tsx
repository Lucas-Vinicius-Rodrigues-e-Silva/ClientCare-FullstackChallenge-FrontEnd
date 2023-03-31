import { IAuthProviderProps } from "../interfaces/authContext";
import { AuthProvider } from "./AuthContext";
import { ClientsProvider } from "./ClientContext";
import { ContactProvider } from "./ContactsContext";

export const Providers = ({ children }: IAuthProviderProps) => {
  return (
    <AuthProvider>
      <ClientsProvider>
        <ContactProvider>{children}</ContactProvider>
      </ClientsProvider>
    </AuthProvider>
  );
};
