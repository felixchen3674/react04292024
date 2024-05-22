import React, { useEffect } from "react";

function ComponentA({ count }: { count: number; sayHi: () => void }) {
  console.log("A rerenders");

  // console.log(document.getElementById("count")?.textContent);

  // useEffect(() => {
  //   console.log(document.getElementById("count")?.textContent);
  // });

  return (
    <div>
      <div>Component A</div>
      <div id="count">Count: {count}</div>
    </div>
  );
}

export default React.memo(ComponentA);
