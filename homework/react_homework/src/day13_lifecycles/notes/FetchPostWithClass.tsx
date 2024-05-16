import { Component, ReactNode } from "react";
import { Post } from "./FetchPosts";
interface StateProp {
  post: Post | null;
  isError: boolean;
  postId: number;
}
export class FetchPostWithClass extends Component<{}, StateProp> {
  constructor(props: {}) {
    super(props);
    this.state = {
      post: null,
      isError: false,
      postId: 1,
    };
  }

  componentDidMount(): void {
    console.log("didmount");
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.postId}`)
      .then((res) => res.json())
      .then((data) => this.setState({ post: data }))
      .catch(() => this.setState({ isError: true }));
  }
  componentDidUpdate(preProps: {}, prevState: StateProp) {
    console.log("update");
    if (prevState.postId !== this.state.postId) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.postId}`)
        .then((res) => res.json())
        .then((data: Post) => {
          this.setState({ post: data });
        });
    }
  }
  handleOnClick = () => {
    this.setState({ postId: this.state.postId + 1 });
  };
  render(): ReactNode {
    const { isError, post } = this.state;
    if (isError) return <div>Something go wrong</div>;
    if (!post) return <div>Page not found</div>;
    return (
      <div>
        <h4>Post Id: {post.id}</h4>
        <h4>Post Title:{post.title}</h4>
        <h4>Post Body:{post.body}</h4>
        <button onClick={this.handleOnClick}>next</button>
      </div>
    );
  }
}
