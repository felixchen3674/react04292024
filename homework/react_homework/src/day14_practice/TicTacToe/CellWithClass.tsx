import { Component, ReactNode } from "react";
import { PlayerType } from "./TicTacToe";

interface CellType {
  onClick: () => void;
  children: PlayerType | null;
}
export class Cell extends Component<CellType> {
  render(): ReactNode {
    const { onClick, children } = this.props;
    return <div onClick={onClick}>{children}</div>;
  }
}
