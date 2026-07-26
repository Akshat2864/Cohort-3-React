import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import { AuthContext, AuthContextProvider } from "./context/AuthContext.jsx";
import {ToastContainer} from "react-toastify";
import { ProductProvider } from "./context/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ProductProvider>
      <AppRoutes />
    <ToastContainer position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        draggable
        theme="light"/>
    </ProductProvider>
  </AuthContextProvider>,
);
