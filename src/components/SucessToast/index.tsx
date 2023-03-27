import { toast } from "react-hot-toast";
export function sucessToast(message: string) {
  toast.success(message, {
    style: {
      border: "1px solid var(--color-sucess)",
      padding: "16px",
      color: "var(--color-sucess)",
      background: "var(--color-grey-2)",
    },
    iconTheme: {
      primary: "var(--color-sucess)",
      secondary: "var(--color-grey-2)",
    },
  });
}
