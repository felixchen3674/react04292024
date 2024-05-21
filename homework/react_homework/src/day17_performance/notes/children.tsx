import React from "react";

export function ChildTwo({ name }: { name: string }) {
  console.log("children render");
  return <div>{name}</div>;
}

export const MemorizeChildTwo = React.memo(ChildTwo);
