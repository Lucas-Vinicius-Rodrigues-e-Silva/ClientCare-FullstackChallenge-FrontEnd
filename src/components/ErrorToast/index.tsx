import { toast } from "react-hot-toast";
export function errorToast(message: string) {
  toast.error(message, {
    style: {
      border: "1px solid #E83F5B",
      padding: "16px",
      color: "#E83F5B",
      background: "#F8F9FA",
    },
    iconTheme: {
      primary: "#E83F5B",
      secondary: "#F8F9FA",
    },
  });
}
