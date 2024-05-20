import { Component, ReactNode } from "react";
import UpdateComponent from "./UpdateComponent";
export interface StateType {
  count: number;
}

class ClickCounter extends Component {
  render(): ReactNode {
    const { incrementCount, count } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Clicked {count} times</button>
      </div>
    );
  }
}
export default UpdateComponent(ClickCounter);
