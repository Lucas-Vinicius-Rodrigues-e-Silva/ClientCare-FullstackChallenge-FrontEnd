import { IAuthProviderProps } from "../interfaces/authContext";
import { AuthProvider } from "./AuthContext";
import { ClientsProvider } from "./ClientContext";

export const Providers = ({ children }: IAuthProviderProps) => {
  return (
    <ClientsProvider>
      <AuthProvider>{children}</AuthProvider>
    </ClientsProvider>
  );
};
