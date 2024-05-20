import { Component, ReactNode } from "react";

export default function UpdateComponent(OriginalComponent) {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((preState) => {
        return { count: preState.count + 1 };
      });
    };
    render(): ReactNode {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return NewComponent;
}
