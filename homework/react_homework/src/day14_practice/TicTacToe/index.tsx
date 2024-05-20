import React, { useState } from "react";
import Cell from "../Cell";
import "./index.css";

export type Player = "O" | "X";
export type CellType = Player | null;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function TicTacToe() {
  const [board, setBoard] = useState<CellType[]>([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [winner, setWinner] = useState<Player | null>(null);
  const [player, setPlayer] = useState<Player>("O");

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = player;
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setPlayer(player === "O" ? "X" : "O");
    }
  };

  const checkWinner = (board: CellType[]): Player | null => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setPlayer("O");
  };

  return (
    <div className="board">
      {board.map((cell, index: number) => {
        return (
          <Cell
            key={index}
            index={index}
            cell={cell}
            handleClick={() => handleClick(index)}
          />
        );
      })}
      <div className="display-winner">
        <div>Winner: {winner ? winner : "None"}</div>
        <button onClick={restartGame}>RESTART GAME</button>
      </div>
    </div>
  );
}
