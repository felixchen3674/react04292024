import React from 'react';
import Cell from './Cell';
import './Board.css';

interface BoardProps {
  cells: (string | null)[];
  handleCellClick: (index: number) => void;
}

export default function Board({ cells, handleCellClick }: BoardProps) {
  return (
    <div className="board">
      {cells.map((cell, index) => {
        return (
          <Cell
            key={index}
            cell={cell}
            handleCellClick={() => handleCellClick(index)}
          />
        );
      })}
    </div>
  );
}
