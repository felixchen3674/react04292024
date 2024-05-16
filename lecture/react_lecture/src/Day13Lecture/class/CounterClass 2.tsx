import React, { Component } from "react";

interface ClassCounterProps {
  name: string;
}

interface ClassStateProps {
  count: number;
}

export default class CounterClass extends Component<
  ClassCounterProps,
  ClassStateProps
> {
  constructor(props: ClassCounterProps) {
    super(props);
    console.log("constructor called");
    this.handleAdd = this.handleAdd.bind(this);
  }

  state = {
    count: 0,
  };

  componentDidMount(): void {
    console.log("component did mount");
  }

  componentDidUpdate(): void {
    console.log("component did update");
  }

  componentWillUnmount(): void {
    console.log("component will be removed shortly");
  }

  handleAdd() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log("rendered");
    return (
      <div>
        <h3>Counter: {this.props.name}</h3>
        <div>Count: {this.state.count}</div>
        <button onClick={this.handleAdd}>Add Count</button>
      </div>
    );
  }
}
