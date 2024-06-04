import React from "react";
import Search from "./Search";
import RenderList from "./RenderList";
import ErrorHandler from "./ErrorHandler";

export default function DomitroyList() {
  return (
    <div>
      <Search />
      <ErrorHandler />
      <RenderList />
    </div>
  );
}
