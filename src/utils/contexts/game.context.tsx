import { Button } from "@/components/ui/button";
import React, { useReducer } from "react";

interface State {
  history: _TSquare[][];
  currentMove: number;
  settleForDraw: boolean;
  draw: boolean;
  phase: _TPhase;
  selectedSquare: number | null;
}
interface _IAdjacentMovesSignature {
  [key: number]: number[];
}

type Action =
  | { type: "SET_HISTORY"; value: _TSquare[][] }
  | { type: "SET_CURRENT_MOVE"; value: number }
  | { type: "SET_PHASE"; value: _TPhase }
  | { type: "SET_DRAW"; value: boolean }
  | { type: "SET_SETTLE_FOR_DRAW"; value: boolean }
  | { type: "SET_SELECTED_SQUARE"; value: number | null };

const initialState: State = {
  history: [Array(9).fill(null)],
  currentMove: 0,
  settleForDraw: false,
  draw: false,
  phase: "placement",
  selectedSquare: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_HISTORY":
      return { ...state, history: action.value };
    case "SET_CURRENT_MOVE":
      return { ...state, currentMove: action.value };
    case "SET_PHASE":
      return { ...state, phase: action.value };
    case "SET_SETTLE_FOR_DRAW":
      return { ...state, settleForDraw: action.value };
    case "SET_DRAW":
      return { ...state, draw: action.value };
    case "SET_SELECTED_SQUARE":
      return { ...state, selectedSquare: action.value };
    default:
      throw new Error(`Unhandled action type: ${(action as Action).type}`);
  }
}

interface _IGameContext {
  state: State;
  currentSquares: _TSquare[];
  xIsNext: boolean;
  winner: _TSquare;
  moves: JSX.Element[];
  onPlay: (squares: _TSquare[], newPhase: _TPhase) => void;
  handleSquareClick: (idx: number) => void;
  jumpTo: (move: number, settleForDrawBoolean: boolean) => void;
  resetGame: () => void;
  calculateWinner: () => _TSquare;
  settleForDraw: () => void;
}

export const GameContext = React.createContext<_IGameContext>({
  state: {
    history: [Array(9).fill(null)],
    currentMove: 0,
    phase: "placement",
    selectedSquare: null,
    settleForDraw: false,
    draw: false,
  },
  currentSquares: Array(9).fill(null),
  xIsNext: true,
  winner: null,
  moves: [<></>],
  onPlay() {},
  handleSquareClick() {},
  settleForDraw() {},
  jumpTo() {},
  resetGame() {},
  calculateWinner: () => null,
});
GameContext.displayName = "GameContext";

const GameProvider: React.FC<_IChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const currentSquares = state.history[state.currentMove];

  const calculateWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const line of lines) {
      const [a, b, c] = line;
      if (
        currentSquares[a] &&
        currentSquares[a] === currentSquares[b] &&
        currentSquares[a] === currentSquares[c]
      ) {
        return currentSquares[a];
      }
    }
    return null;
  };
  const winner = calculateWinner();
  const xIsNext = !state.draw && !winner && state.currentMove % 2 === 0;

  const onPlay = (nextSquares: _TSquare[], newPhase: _TPhase) => {
    const nextHistory = [
      ...state.history.slice(0, state.currentMove + 1),
      nextSquares,
    ];
    dispatch({ type: "SET_HISTORY", value: nextHistory });
    dispatch({ type: "SET_CURRENT_MOVE", value: nextHistory.length - 1 });
    dispatch({ type: "SET_PHASE", value: newPhase });
  };

  const handleSquareClick = (idx: number) => {
    if (calculateWinner() || state.draw) {
      return;
    }

    const currentPlayer = xIsNext ? "X" : "O";
    const nextSquares = currentSquares.slice();

    if (state.history.length > 9 && state.currentMove > 9) {
      dispatch({ type: "SET_SETTLE_FOR_DRAW", value: true });
    }

    if (state.phase === "placement") {
      // Placement Phase Logic
      if (!currentSquares[idx]) {
        nextSquares[idx] = currentPlayer;
        onPlay(
          nextSquares,
          nextSquares.filter(Boolean).length === 6 ? "movement" : "placement"
        );
      }
    } else if (state.phase === "movement") {
      // Movement Phase Logic
      if (state.selectedSquare === null) {
        if (currentSquares[idx] === currentPlayer) {
          dispatch({ type: "SET_SELECTED_SQUARE", value: idx });
        }
      } else {
        if (isAdjacent(state.selectedSquare, idx) && !currentSquares[idx]) {
          nextSquares[state.selectedSquare] = null;
          nextSquares[idx] = currentPlayer;
          dispatch({ type: "SET_SELECTED_SQUARE", value: null });
          onPlay(nextSquares, "movement");
        } else {
          // Reset selection if move is invalid
          dispatch({ type: "SET_SELECTED_SQUARE", value: null });
        }
      }
    }
  };

  const isAdjacent = (fromIdx: number, toIdx: number) => {
    const adjacentMoves: _IAdjacentMovesSignature = {
      0: [1, 3, 4],
      1: [0, 2, 3, 4, 5],
      2: [1, 4, 5],
      3: [0, 1, 4, 6, 7],
      4: [0, 1, 2, 3, 5, 6, 7, 8],
      5: [1, 2, 4, 7, 8],
      6: [3, 4, 7],
      7: [3, 4, 5, 6, 8],
      8: [4, 5, 7],
    };
    return adjacentMoves[fromIdx].includes(toIdx);
  };

  const resetGame = () => {
    dispatch({ type: "SET_HISTORY", value: [Array(9).fill(null)] });
    dispatch({ type: "SET_CURRENT_MOVE", value: 0 });
    dispatch({ type: "SET_PHASE", value: "placement" });
    dispatch({ type: "SET_SETTLE_FOR_DRAW", value: false });
    dispatch({ type: "SET_DRAW", value: false });
    dispatch({ type: "SET_SELECTED_SQUARE", value: null });
  };

  const settleForDraw = () => {
    dispatch({ type: "SET_DRAW", value: true });
  };

  const jumpTo = (move: number, settleForDrawBoolean: boolean) => {
    dispatch({ type: "SET_CURRENT_MOVE", value: move });
    dispatch({ type: "SET_SETTLE_FOR_DRAW", value: settleForDrawBoolean });
  };

    const moves = state.history.map((_, moveIdx) => {
      let description: string;
      if (moveIdx > 0) {
        if (moveIdx === state.currentMove) {
          description = `Current move`;
        } else {
          description = `Go to move #${moveIdx}`;
        }
      } else {
        if (moveIdx === state.currentMove) {
          description = `Current move`;
        } else {
          description = "Go to game start";
        }
      }

      return (
        <li key={moveIdx}>
          <Button
            variant="default"
            size="default"
            className={`w-32 transition-all duration-200 ${
              moveIdx === state.currentMove
                ? "bg-green-700 hover:bg-secondary/80"
                : ""
            }`}
            onClick={() =>
              moveIdx > 9 ? jumpTo(moveIdx, true) : jumpTo(moveIdx, false)
            }
          >
            {description}
          </Button>
        </li>
      );
    });

  const value = {
    state,
    currentSquares,
    xIsNext,
    winner,
    moves,
    onPlay,
    handleSquareClick,
    jumpTo,
    resetGame,
    calculateWinner,
    settleForDraw,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameProvider;
