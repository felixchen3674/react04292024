import React from "react";
import Solution from "./Solution";

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
      <Solution />
    </div>
  );
}
