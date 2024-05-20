import React, { useEffect, useState } from 'react';
import Board from './components/Board';

type Cell = 'X' | 'O' | null;
type Player = 'X' | 'O';

const winningArrays = [
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
  const [cells, setCells] = useState<Cell[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player | null>(null);

  const handleCellClick = (index: number) => {
    // console.log(index);
    if (cells[index] !== null) {
      return;
    }
    const newCells = [...cells];
    newCells[index] = currentPlayer;
    setCells(newCells);
    if (currentPlayer === 'X') {
      setCurrentPlayer('O');
    } else {
      setCurrentPlayer('X');
    }
  };
  const checkWinner = (cells: Cell[]) => {
    for (const winningArray of winningArrays) {
      const cellValue1 = cells[winningArray[0]];
      const cellValue2 = cells[winningArray[1]];
      const cellValue3 = cells[winningArray[2]];
      if (
        cellValue1 !== null &&
        cellValue1 === cellValue2 &&
        cellValue1 === cellValue3
      ) {
        setWinner(cellValue1);
      }
    }
  };

  const handleRestart = () => {
    setCells(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };

  useEffect(() => {
    checkWinner(cells);
  }, [cells]);

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board cells={cells} handleCellClick={handleCellClick} />
      <h2>Winner is {winner}</h2>
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
}
