import React, { Component } from "react";

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);

//   });

async function wait(time = 1000) {
  return new Promise((res) => {
    setTimeout(() => {
      res("");
    }, time);
  });
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostListClassProps {}
interface PostListClassStates {
  posts: Post[];
  isLoading: boolean;
  isError: boolean;
}

export default class PostListClass extends Component<
  PostListClassProps,
  PostListClassStates
> {
  constructor(props: any) {
    super(props);

    this.state = {
      posts: [],
      isLoading: false,
      isError: false,
    };
  }

  //   fetchPosts() {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         //   console.log(data);
  //         return data;
  //       });
  //   }

  componentDidMount(): void {
    console.log("posts mounted", this.state.posts);

    const fetchPosts = async () => {
      this.setState({ isLoading: true });
      try {
        await wait();
        // throw new Error("some error");
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        this.setState({ isLoading: false, posts: data });
      } catch (err) {
        this.setState({ isLoading: false, isError: true });
      }
    };

    fetchPosts();

    // this.setState({ isLoading: true });
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     this.setState({ posts: data });
    //   })
    //   .catch((err) => {
    //     this.setState({ isError: true });
    //   })
    //   .finally(() => {
    //     this.setState({ isLoading: false });
    //   });
  }

  componentDidUpdate(): void {
    // console.log("posts just updated", this.state.posts);
  }


  render() {
    const { posts, isLoading, isError } = this.state;

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>Something went wrong</div>;

    return (
      <div>
        <h2>Post List</h2>

        <ul>
          {posts.map((post: any) => {
            return <div key={post.id}>{post.title}</div>;
          })}
        </ul>
      </div>
    );
  }
}
