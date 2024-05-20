import React, { useState } from "react";
import "./style.css";

type Player = "X" | "O";
enum Results {
  X_WINS = "Winner: X",
  O_WINS = "Winner: O",
  DRAW = "Draw",
  ON_GOING = "On Going",
}
interface CellType {
  id: number;
  player: Player | null;
}

const initBoard: CellType[] = [
  { id: 1, player: null },
  { id: 2, player: null },
  { id: 3, player: null },
  { id: 4, player: null },
  { id: 5, player: null },
  { id: 6, player: null },
  { id: 7, player: null },
  { id: 8, player: null },
  { id: 9, player: null },
];

export default function TicTacToe() {
  const [board, setBoard] = useState(initBoard);

  // change between the player
  const [curPlayer, setCurPlayer] = useState<Player>("X");

  const handleClickCell = (id: number) => {
    // copy the board, only set the cell for the id chosen
    setBoard((prev) =>
      prev.map((cell) => {
        if (cell.id === id) {
          if (cell.player !== null) {
            
          }
        }
      return cell;
        // return cell.id === id
        //   ? ({
        //       ...cell,
        //       player: curPlayer,
        //     } as CellType)
        //   : cell;
      })
    );
    setCurPlayer(curPlayer === "X" ? "O" : "X");
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div>Current Player: {curPlayer}</div>
      <div className="board">
        {board.map((cell) => {
          return (
            <div
              key={cell.id}
              className="cell"
              onClick={() => handleClickCell(cell.id)}
            >
              {cell.player}
            </div>
          );
        })}
      </div>
    </div>
  );
}
