import React, { useState } from 'react'
import Cell from '../Cell'

export type Player = 'O' | 'X';
export type CellType = Player | null

export default function TicTacToe() {
  const [board, setBoard] = useState<CellType[]>([null, null, null, null, null, null, null, null, null]);
  const [winner, setWinner] = useState<Player | null>(null);
  const [player, setPlayer] = useState<Player>('O');


  return (
    <div>
      {
        board.map((cell, index: number) => {
          return <Cell key={index} index={index} cell={cell}/>
        })
      }
      <span>{winner}</span>
      <button>RESTART GAME</button>
    </div>
  )
}

console.log(123)