import { toast } from "react-hot-toast";
export function errorToast(message: string) {
  toast.error(message, {
    style: {
      border: "1px solid var(--color-error)",
      padding: "16px",
      color: "var(--color-error)",
      background: "var(--color-grey-2)",
    },
    iconTheme: {
      primary: "var(--color-error)",
      secondary: "var(--color-grey-2)",
    },
  });
}
