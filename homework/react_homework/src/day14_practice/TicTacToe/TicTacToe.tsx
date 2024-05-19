import { Component, ReactNode } from "react";
import { Cell } from "./CellWithClass";

type StateType = {
  board: (PlayerType | null)[];
  nextPlayer: "X" | "O";
};
export type PlayerType = "X" | "O";

export class TicTacToe extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      nextPlayer: "O",
    };
  }
  handleOnClick = (ItemIndex: number) => {
    const { board } = this.state;
    if (board[ItemIndex] !== null || this.calculateWinner(board)) {
      return;
    }
    const newBoard = this.state.board.map((item, index) => {
      if (index === ItemIndex) {
        item = this.state.nextPlayer;
      }
      return item;
    });
    this.setState({ board: newBoard });
    this.setState({ nextPlayer: this.state.nextPlayer === "O" ? "X" : "O" });
  };
  calculateWinner = (board: (PlayerType | null)[]) => {
    const winnerCombation = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const array of winnerCombation) {
      const [a, b, c] = array;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  };
  handleReset = () => {
    this.setState({ board: Array(9).fill(null) });
  };

  render(): ReactNode {
    const { board, nextPlayer } = this.state;
    return (
      <div id="itemContainer">
        <div id="gameContainer">
          {board.map((item, index) => {
            return (
              <Cell key={index} onClick={() => this.handleOnClick(index)}>
                {item}
              </Cell>
            );
          })}
        </div>
        <div>
          <h2>Next Player:{nextPlayer}</h2>
        </div>
        <div>
          {this.calculateWinner(board) ? (
            <h2>Winner is {nextPlayer === "O" ? "X" : "O"}</h2>
          ) : board.every((item) => item !== null) ? (
            <h2>Draw Game</h2>
          ) : (
            <h2>Game is on going!</h2>
          )}
        </div>
        <div>
          <button onClick={this.handleReset}>Reset Game</button>
        </div>
      </div>
    );
  }
}
