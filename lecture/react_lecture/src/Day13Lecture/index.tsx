import React, { useState } from "react";
import ClassCounter from "./class/CounterClass";
import PostListClass from "./class/PostListClass";
import CleanUpClass from "./class/CleanUpClass";
import CounterFn from "./functions/CounterFn";
import CleanUpFn from "./functions/CleanUpFn";
import PostListFn from "./functions/PostListFn";

export default function Day13Lecture() {
  const [showComponents, setShowComponents] = useState(true);

  return (
    <div>
      <h2>Day13Lecture</h2>
      <button onClick={() => setShowComponents(!showComponents)}>
        {showComponents ? "Hide" : "Show"}
      </button>
      {showComponents && (
        <>
          {/* <ClassCounter name={"Class"} /> */}
          {/* <CounterFn /> */}
          {/* <PostListClass /> */}
          {/* <PostListFn /> */}
          {/* <CleanUpClass /> */}
          <CleanUpFn />
        </>
      )}
    </div>
  );
}
