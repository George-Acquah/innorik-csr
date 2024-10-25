import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";
import ConfiguratorProvider from "./utils/contexts/configurator.contexts";
import ConfigurationButton from "./components/shared/consfiguratorButton";
import Configurator from "./components/shared/configurator";
import { ThemeProvider } from "./utils/contexts/theme.context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ConfiguratorProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
        <ConfigurationButton />
        <Configurator />
      </ConfiguratorProvider>
    </ThemeProvider>
  </StrictMode>
);
