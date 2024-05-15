import React from "react";


// smart / dumb components
// container / presentational component 

// Keeping components pure, so it's easier for testing




export default function KeepComponentsPure({ a }: any) {
  return (
    <div>
      <h3>Keeping Components Pure</h3>
      <div>{a}</div>
    </div>
  );
}
