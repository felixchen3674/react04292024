import { Component, ReactNode } from "react";

interface StateType {
  count: number;
  isRunning: boolean;
}
export class CounterClass extends Component<{}, StateType> {
  private interalId: number | undefined;

  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
      isRunning: false,
    };
  }
  handleStart = () => {
    this.setState({ isRunning: true });
    this.interalId = setInterval(
      () => this.setState((preState) => ({ count: preState.count + 1 })),
      1000
    );
  };
  handlePause = () => {
    this.setState({ isRunning: false });
    clearInterval(this.interalId);
  };
  handleReset = () => {
    clearInterval(this.interalId);
    this.setState({ count: 0, isRunning: false });
  };

  render(): ReactNode {
    const { count, isRunning } = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={this.handleStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={this.handlePause} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
