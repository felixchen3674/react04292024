import { Component, ReactNode } from "react";
import { StateType } from "./ClickCounter";
import UpdateComponent from "./UpdateComponent";

class HoverCounter extends Component {
  render(): ReactNode {
    const { incrementCount, count } = this.props;
    return (
      <div>
        <button onMouseOver={incrementCount}>Hover {count} times</button>
      </div>
    );
  }
}
export default UpdateComponent(HoverCounter);
