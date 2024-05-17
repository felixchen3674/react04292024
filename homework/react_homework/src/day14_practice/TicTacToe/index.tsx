import { useState } from "react";
import Cell from "./Cell";

type PlayerType = "X" | "O";
export default function TicTacToe() {
  const [board, setBoard] = useState(Array<PlayerType | null>(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState<PlayerType>("O");

  const handleOnClick = (index: number) => {
    const newBoard = board.slice();
    if (newBoard[index] !== null || calculateWinner(board)) {
      return;
    } else {
      newBoard[index] = nextPlayer;
      setNextPlayer(nextPlayer === "O" ? "X" : "O");
      setBoard(newBoard);
    }
  };

  const handleRestart = () => {
    setBoard(Array<PlayerType | null>(9).fill(null));
    setNextPlayer("O");
  };

  const calculateWinner = (board: Array<PlayerType | null>) => {
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

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }

    return false;
  };

  return (
    <div>
      <h1>Tic Tac Toe Game</h1>
      <div id="gameContainer">
        {board.map((item, index) => {
          return (
            <Cell
              key={index}
              index={index}
              onClick={() => handleOnClick(index)}
            >
              {item}
            </Cell>
          );
        })}
      </div>
      <div>
        {calculateWinner(board) || board.every((item) => item !== null) ? (
          <h2>End Game</h2>
        ) : (
          <h2>Next Player: {nextPlayer}</h2>
        )}
      </div>
      <div>
        <h2>
          Result:
          {calculateWinner(board)
            ? `Winner is :${nextPlayer === "X" ? "O" : "X"}`
            : board.every((item) => item !== null)
            ? "Draw"
            : null}
        </h2>
      </div>
      <div>
        <button onClick={handleRestart}> Restart Game</button>
      </div>
    </div>
  );
}
