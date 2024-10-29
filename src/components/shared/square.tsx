import { use } from "react";
import { Typography } from "../ui/typography";
import { GameContext } from "@/utils/contexts/game.context";

interface SquareProps {
  value: _TSquare;
  onSquareClick: () => void;
  isSelected?: boolean;
  id: number;
}

const Square = ({
  value,
  id,
  onSquareClick,
  isSelected = false,
}: SquareProps) => {
  const { state: { draw }, winner } = use(GameContext);
  return (
    <button
      className={`bg-white border border-neutral-400 h-12 md:h-20 p-0 text-center w-12 md:w-20 transition-colors duration-100 
        ${isSelected ? "!bg-secondary" : ""} ${winner || draw ? 'pointer-events-none ' : ''}
      `}
      aria-label={`Button-${id}`}
      onClick={onSquareClick}
    >
      <Typography
        variant="h1"
        className={` 
        ${isSelected ? "text-white" : ""}
      `}
      >
        {value}
      </Typography>
    </button>
  );
};

export default Square;
