import React, { Component } from "react";
import { fetchData } from "./helper";

export default class FetchPostByTimeP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: 1,
      post: {},
    };
  }
  private timeId;
  componentDidMount(): void {
    this.loadData();
    this.timeId = setInterval(() => {
      this.setState((pre) => ({ postId: pre.postId + 1 }));
    }, 1000);
  }
  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    if (prevState.postId !== this.state.postId) {
      this.loadData();
    }
  }
  componentWillUnmount(): void {
    clearInterval(this.timeId);
  }
  loadData = () => {
    const { postId } = this.state;
    fetchData(postId)
      .then((data) => this.setState({ post: data }))
      .catch((err) => console.log(err));
  };

  render() {
    const { post } = this.state;
    return <div>{post.title}</div>;
  }
}
