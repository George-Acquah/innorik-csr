import { THEME } from "@/utils";
import { lazy, Suspense } from "react";

const Game = lazy(() => import("@/components/shared/game"));
const GameHistory = lazy(() => import("@/components/shared/game-history"));
const GamePlayers = lazy(() => import("@/components/shared/game-players"));

function App() {
  return (
    <div
      className={
        "flex flex-col bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-8 py-4 h-screen"
      }
    >
      <div
        className={`p-2 md:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-700 ${THEME.mainBg} min-h-full flex flex-col gap-2`}
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-grow flex-col justify-center items-center">
            <Suspense
              key={"game-component"}
              fallback={<p>Loading Main Game...</p>}
            >
              <Game />
            </Suspense>
            <Suspense
              key={"game-history-component"}
              fallback={<p>Loading Game History ...</p>}
            >
              <GameHistory />
            </Suspense>
          </div>
          <div className="flex flex-col flex-1 h-full justify-center items-center">
            <div className="flex-grow" />
            <Suspense
              key={"game-history-component"}
              fallback={<p>Loading Game Players ...</p>}
            >
              <GamePlayers />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
