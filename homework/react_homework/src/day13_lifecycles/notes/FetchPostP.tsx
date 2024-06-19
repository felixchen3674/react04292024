import React, { Component } from "react";
import { fetchData } from "./helper";

export default class FetchPostP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      postId: 1,
      errorMessage: "",
    };
  }
  componentDidMount(): void {
    this.loadData();
  }
  handleNext = () => {
    this.setState((preState) => ({ postId: preState.postId + 1 }));
  };
  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>): void {
    const { postId } = this.state;
    if (prevState.postId !== postId) {
      this.loadData();
    }
  }
  loadData = () => {
    const { postId } = this.state;
    fetchData(postId)
      .then((data) => this.setState({ post: data }))
      .catch((err) => this.setState({ errorMessage: err }));
  };
  render() {
    const { post, errorMessage } = this.state;
    return (
      <div key={post.id}>
        {errorMessage ? (
          <p>Error: {errorMessage}</p>
        ) : (
          <div>
            <h4>{post.title}</h4>
          </div>
        )}
        <button onClick={this.handleNext}>next</button>
      </div>
    );
  }
}
