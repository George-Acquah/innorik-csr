import { use } from "react";
import { GameContext } from "@/utils/contexts/game.context";
import { Typography } from "../ui/typography";

const GameStatus = () => {
  const {
    calculateWinner,
    xIsNext,
    state: { draw, selectedSquare, phase },
  } = use(GameContext);

  const winner = calculateWinner();
  let status: string;

  if (draw) {
    status = "You settled for draw";
  } else {
    if (winner) {
      status = `Winner: ${winner}`;
    } else if (phase === "movement" && selectedSquare !== null) {
      status = `Move ${xIsNext ? "X" : "O"} to an adjacent square`;
    } else {
      status =
        phase === "placement"
          ? `Place your pieces: ${xIsNext ? "X" : "O"}`
          : `Select a piece to move: ${xIsNext ? "X" : "O"}`;
    }
  }
  return (
    <div className="mb-3">
      <Typography variant="h4">{status}</Typography>
    </div>
  );
};

export default GameStatus;
