<<<<<<< HEAD
<<<<<<< HEAD
import React, {useState} from 'react'

type Player = 'X' | 'O';
type SquareValue = Player | null;
=======
import React from "react";
import Solution from "./Solution";
>>>>>>> ca451d1 (tic tac toe)
=======
import React from "react";
import Solution from "./Solution";
=======
import React, {useState} from 'react'

type Player = 'X' | 'O';
type SquareValue = Player | null;
>>>>>>> c912a75 (progress on ttt)
>>>>>>> a72aefb (progress on ttt)

export default function TicTacToe() {
  return (
    <div>
      <Solution />
    </div>
  );
}
