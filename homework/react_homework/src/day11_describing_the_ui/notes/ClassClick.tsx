import { Component, ReactNode } from "react";

export class ClassClick extends Component {
  handleOnClick = () => {
    console.log("button Clicked by classClick");
  };

  render(): ReactNode {
    return <button onClick={this.handleOnClick}>Class Button</button>;
  }
}
