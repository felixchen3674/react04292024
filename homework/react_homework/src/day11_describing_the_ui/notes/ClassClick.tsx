// import { Component, ReactNode } from "react";

// export class ClassClick extends Component {
//   handleOnClick = () => {
//     console.log("button Clicked by classClick");
//   };

//   render(): ReactNode {
//     return <button onClick={this.handleOnClick}>Class Button</button>;
//   }
// }

import React, { Component, ReactNode } from "react";

export class ClassClick extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleOnClick = () => {
    console.log("button Clicked by classClick");
  };
  render(): ReactNode {
    return <button onClick={this.handleOnClick}>Class button</button>;
  }
}
