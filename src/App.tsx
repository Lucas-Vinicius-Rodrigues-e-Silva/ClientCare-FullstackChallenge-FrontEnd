import { Toaster } from "react-hot-toast";
import "./App.css";
import { Application } from "./routes/mainRoutes";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Application />
    </>
  );
}

export default App;
