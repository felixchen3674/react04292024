import React from 'react'
import { CellType, Player } from '../TicTacToe'
import './index.css'

interface CellProps {
    index: number,
    cell: CellType,
    handleClick: () => void
}

export default function Cell({index, cell, handleClick}: CellProps) {

  return (
    <div className='cell' onClick={handleClick}>
        {cell}
    </div>
  )
}
