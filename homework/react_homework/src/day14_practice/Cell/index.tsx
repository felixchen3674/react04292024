import React from 'react'
import { CellType, Player } from '../TicTacToe'

interface CellProps {
    index: number,
    cell: CellType
}

export default function Cell({index, cell}: CellProps) {

  return (
    <div>
        {cell}
    </div>
  )
}
