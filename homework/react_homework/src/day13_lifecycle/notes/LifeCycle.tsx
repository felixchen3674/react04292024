import { Component, ReactNode } from "react";
interface Type {
  check: boolean;
  count: number;
}

export class LifeCycle extends Component<{}, Type> {
  constructor(props: {}) {
    super(props);
    this.state = {
      check: false,
      count: 0,
    };
  }
  componentDidMount() {
    console.log("components did mount");
    // we usually use didmount to do some side effect like fetching data
  }
  componentDidUpdate() {
    console.log("component did update");
    // we usually use for updating some state like counter;
  }
  render(): ReactNode {
    console.log("render");
    const { count, check } = this.state;
    return (
      <div>
        <h1>Component lifeCycle</h1>
        <button onClick={() => this.setState({ count: count + 1 })}>
          increase
        </button>
        {/* {this.state.check ? <h1>good</h1> : "bad"} */}
        {this.state.check ? <Child /> : null}
        <button onClick={() => this.setState({ check: !check })}>
          use for unmount
        </button>
      </div>
    );
  }
}
export class Child extends Component<{}> {
  constructor(props: {}) {
    super(props);
  }
  componentWillUnmount() {
    console.log("Components will unmount");
    // compontwill unmount will only trigger when this compontent will be destory ; usecase : conditional statement
  }
  render(): ReactNode {
    return (
      <div>
        <h3>child component for Compontdidunmount</h3>
      </div>
    );
  }
}
