import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Typography } from "../ui/typography";
import { use } from "react";
import { GameContext } from "@/utils/contexts/game.context";

const GamePlayers = () => {
  const { xIsNext, winner, state: { draw } } = use(GameContext);
  const player = xIsNext ? "X" : "O";

  return (
    <div className="flex flex-1 justify-between items-center w-full md:max-w-60 xl:max-w-lg transition-all duration-100">
      {/* Player 1 */}
      <UserIcon
        className={`rounded-md  w-16 h-16 border transition-all duration-150 ${
          winner && winner === "X"
            ? "bg-green-300 border-green-700"
            : xIsNext
            ? "bg-green-300 border-green-700"
            : "bg-opacity-30"
        }`}
      />

      {/* Players Divider */}
      <div className="flex items-center gap-6 transition-all duration-100 ">
        {(!winner ||
          !draw) && (
            <ChevronDoubleLeftIcon
              className={`w-6 ${
                xIsNext
                  ? "hover:translate-x-1 animate-ping rounded-sm ring-4 ring-green-500  transition duration-150"
                  : ""
              } `}
            />
          )}
        <Typography variant="h2" className="transition-all duration-200 ">
          { draw ? 'Game ended in a draw' : winner ? `Player ${winner} has won` : `Player ${player}'s Turn`}
        </Typography>
        {(!winner ||
          !draw) && (
            <ChevronDoubleRightIcon
              className={`w-6 ${
                !xIsNext
                  ? "hover:translate-x-1 animate-ping rounded-sm ring-4 ring-green-500 transition duration-150"
                  : ""
              } `}
            />
          )}
      </div>

      {/* Player 2 */}
      <UserIcon
        className={`rounded-md  w-16 h-16 border transition-all duration-150 ${
          winner && winner === "X"
            ? ""
            : !xIsNext && !draw
            ? "bg-green-300 border-green-700"
            : "bg-opacity-30"
        }`}
      />
    </div>
  );
};

export default GamePlayers;
