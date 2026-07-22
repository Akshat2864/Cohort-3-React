import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import { AuthContext, AuthContextProvider } from "./context/AuthContext.jsx";
import {ToastContainer} from "react-toastify";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <AppRoutes />
    <ToastContainer/>
  </AuthContextProvider>,
);
