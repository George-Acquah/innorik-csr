import Square from "./square";
import { use } from "react";
import { GameContext } from "@/utils/contexts/game.context";

const GameBoard = () => {
  const { state: { selectedSquare }, currentSquares: squares, handleSquareClick } = use(GameContext);

  return (
    <div className="grid grid-cols-3">
      {squares.map((value, idx) => (
        <Square
          key={idx}
          value={value}
          id={idx}
          onSquareClick={() => handleSquareClick(idx)}
          isSelected={selectedSquare === idx}
        />
      ))}
    </div>
  );
};

export default GameBoard;