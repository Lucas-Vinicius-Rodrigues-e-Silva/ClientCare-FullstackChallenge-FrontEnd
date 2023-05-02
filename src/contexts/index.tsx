import { IAuthProviderProps } from "../interfaces/authContext";
import { AuthProvider } from "./AuthContext";
import { ClientsProvider } from "./ClientContext";
import { ContactProvider } from "./ContactsContext";
import { UserProvider } from "./UserContext";

export const Providers = ({ children }: IAuthProviderProps) => {
  return (
    <AuthProvider>
      <ClientsProvider>
        <ContactProvider>
          <UserProvider>{children}</UserProvider>
        </ContactProvider>
      </ClientsProvider>
    </AuthProvider>
  );
};
