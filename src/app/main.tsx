import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import HeroUIProviderWrapper from "./providers/heroui-provider/HeroUIProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroUIProviderWrapper>
      <App />
    </HeroUIProviderWrapper>
  </StrictMode>
);
