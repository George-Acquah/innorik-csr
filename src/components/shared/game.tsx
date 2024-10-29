import { use } from "react";
import GameBoard from "./game-board";
import { Button } from "../ui/button";
import { GameContext } from "@/utils/contexts/game.context";
import GameStatus from "./game-status";

const Game = () => {
  const {
    resetGame,
    settleForDraw: settleForDrawFn,
    winner,
    state: { settleForDraw, draw, history, }
  } = use(GameContext);

  return (
    <div>
      <GameStatus />
      <div className="flex gap-4">
        <div className="space-y-4">
          <GameBoard />
        </div>

        <div className="flex flex-col items-center space-y-4 ">
          <Button
            variant="destructive"
            size="lg"
            className="text-white w-40"
            aria-disabled={history.length === 1}
            onClick={resetGame}
          >
            {winner || draw ? "Replay" : "Reset Game"}
          </Button>

          {!winner && settleForDraw && (
            <Button
              variant="default"
              size="lg"
              aria-disabled={draw}
              className="w-40"
              onClick={settleForDrawFn}
            >
              Settle for draw
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;