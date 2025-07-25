import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/index.css";
import HeroUIProviderWrapper from "./app/providers/heroui-provider/HeroUIProvider";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <HeroUIProviderWrapper>
        <App />
      </HeroUIProviderWrapper>
    </BrowserRouter>
  </StrictMode>
);
