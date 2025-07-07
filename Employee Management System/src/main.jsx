import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ModalContextProvide } from "./context/contextProvide.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalContextProvide>
      <App />
    </ModalContextProvide>
  </StrictMode>
);
