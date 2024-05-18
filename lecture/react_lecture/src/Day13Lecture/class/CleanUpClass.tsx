import React, { Component } from "react";

export default class CleanUpClass extends Component<any, any> {
  constructor(props: any) {
    super(props);
    // this.startInterval = this.startInterval.bind(this);
    // this.cleanInterval = this.cleanInterval.bind(this);
  }

  componentDidMount(): void {
    this.intervalId = setInterval(() => {
      console.log("you are doing well");
    }, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.intervalId);
  }

  //   startInterval() {
  //     this.intervalId = setInterval(() => {
  //       console.log("you are doing well");
  //     }, 1000);
  //   }

  //   cleanInterval() {
  //     clearInterval(this.intervalId);
  //   }

  render() {
    return (
      <div>
        <h3>Clean up Class</h3>
        {/* <button onClick={this.startInterval}>Start Interval</button>
        <button onClick={this.cleanInterval}>Cancel Interval</button> */}
      </div>
    );
  }
}
