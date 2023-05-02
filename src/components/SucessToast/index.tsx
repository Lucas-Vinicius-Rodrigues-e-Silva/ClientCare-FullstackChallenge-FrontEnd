import { toast } from "react-hot-toast";
export function sucessToast(message: string) {
  toast.success(message, {
    style: {
      border: "1px solid #91a7ff",
      padding: "16px",
      color: "#91a7ff",
      background: "#F8F9FA",
    },
    iconTheme: {
      primary: "#91a7ff",
      secondary: "#F8F9FA",
    },
  });
}
