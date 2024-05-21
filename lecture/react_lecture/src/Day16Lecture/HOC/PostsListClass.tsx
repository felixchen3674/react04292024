import React, { Component } from "react";
import withFetch from "./withFetch";

class PostsListClass extends Component {
  render() {
    const { data, isLoading } = this.props;
    console.log(data, isLoading);

    return (
      <div>
        <h1>Todo List</h1>
        <div>
          {data.map((post) => {
            return <div key={post.id}>{post.title}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default withFetch(
  PostsListClass,
  "https://jsonplaceholder.typicode.com/posts"
);

// HOC hell
// export default withC(
//   withB(
//     witherrorHadnling(
//       withA(
//         withFetch(PostsListClass, "https://jsonplaceholder.typicode.com/posts")
//       )
//     )
//   )
// );
