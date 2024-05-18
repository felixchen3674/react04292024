import React from 'react';
import './Cell.css';

interface CellProps {
  cell: string | null;
  handleCellClick: () => void;
}

export default function Cell({ cell, handleCellClick }: CellProps) {
  return (
    <button className="cell" onClick={handleCellClick}>
      {cell}
    </button>
  );
}
