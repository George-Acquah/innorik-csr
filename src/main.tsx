import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import GameProvider from "./utils/contexts/game.context";
import App from "./app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GameProvider>
        <App />
    </GameProvider>
  </StrictMode>
);
