import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import "./styles.css";

const rootElement = document.querySelector<HTMLElement>("#root");

if (rootElement === null) {
  throw new Error("No se encontró el elemento raíz de la fundación web.");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
