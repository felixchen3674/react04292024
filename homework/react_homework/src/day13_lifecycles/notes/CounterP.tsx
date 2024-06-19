import React, { Component } from "react";

export default class CounterP extends Component {
  private timeId;
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isRunning: false,
    };
  }
  componentWillUnmount(): void {
    clearInterval(this.timeId);
  }
  handleStart = () => {
    if (this.state.isRunning) {
      return;
    }
    this.setState({ isRunning: true });
    clearInterval(this.timeId);
    this.timeId = setInterval(() => {
      this.setState((pre) => ({ count: pre.count + 1 }));
    }, 1000);
  };
  handlePause = () => {
    this.setState({ isRunning: false });
    clearInterval(this.timeId);
  };
  handleReset = () => {
    this.setState({ count: 0, isRunning: false });
    clearInterval(this.timeId);
  };
  render() {
    const { count, isRunning } = this.state;
    return (
      <div>
        <div>Counter:{count}</div>
        <div>
          <button onClick={this.handleStart} disabled={isRunning}>
            Start
          </button>
        </div>
        <div>
          <button onClick={this.handlePause} disabled={!isRunning}>
            Pause
          </button>
        </div>
        <div>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}
