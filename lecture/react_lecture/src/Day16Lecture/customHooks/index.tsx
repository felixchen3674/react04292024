import React, { useState } from "react";
import PostListFn from "./PostsListFn";

export default function CustomHooksNotes() {
  return (
    <div>
      <PostListFn />
    </div>
  );
}

// naming requirements for custom hooks
// 1. it has to start with use
// 2. cannot be capitalized

// a hook cannot be called inside of a normal function
// a hook can only be called inside a component or custom hook
