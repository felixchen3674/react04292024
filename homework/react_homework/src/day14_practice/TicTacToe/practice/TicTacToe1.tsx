import React, { Component } from "react";

const data = new Array(9).fill(null);
const winnrresult = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default class TicTacToe1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data,
      nextPlayer: "O",
    };
  }
  handleOnClick = (id) => {
    const { items, nextPlayer } = this.state;
    if (this.calculateWinner(items)) {
      return;
    }
    if (items[id] !== null) {
      return;
    }
    const newitems = items.map((item, index) => {
      if (index === id) {
        return nextPlayer;
      } else {
        return item;
      }
    });
    this.setState({
      items: newitems,
      nextPlayer: nextPlayer === "O" ? "X" : "O",
    });
  };
  calculateWinner = (items) => {
    for (const array of winnrresult) {
      const [a, b, c] = array;
      if (items[a] !== null && items[a] === items[b] && items[a] === items[c]) {
        return true;
      }
    }
    return false;
  };

  render() {
    const { items, nextPlayer } = this.state;
    const result = this.calculateWinner(items);
    const draw = items.every((item) => item !== null);
    return (
      <div>
        <div className="gridContainer">
          {items &&
            items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="itemContainer"
                  onClick={() => this.handleOnClick(index)}
                >
                  {item}
                </div>
              );
            })}
        </div>
        <div>Next Player : {nextPlayer}</div>
        {result ? (
          <div>Winner is {nextPlayer === "O" ? "X" : "O"}</div>
        ) : draw ? (
          <div>Draw Game</div>
        ) : (
          <div>On going</div>
        )}
      </div>
    );
  }
}
