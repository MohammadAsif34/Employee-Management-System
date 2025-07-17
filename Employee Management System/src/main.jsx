import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  ModalContextProvider,
  UserContextProvider,
} from "./context/UserContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <UserContextProvider>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </UserContextProvider>
  // </StrictMode>,
);
