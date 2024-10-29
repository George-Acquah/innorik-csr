import { GameContext } from "@/utils/contexts/game.context";
import { use } from "react";

const GameHistory = () => {
  const {
    moves,
  } = use(GameContext);

  return (
    <div className="my-8">
      <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
        {moves}
      </ol>
    </div>
  );
};

export default GameHistory;
