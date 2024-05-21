import React, { Suspense, lazy, useCallback, useState } from "react";
import List from "./List";
// import Lazy from "./lazy";

export default function UseCallBack() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // const Lazy = lazy(() => import("./lazy")); One way with exporting function as default
  // create code spliting components by using lazy keyword and path as parameter to pass in a call back function.
  // If the component didn't export the function as default, this is the second way
  const Lazy = lazy(() =>
    import("./lazy").then((module) => {
      return { default: module.Lazy };
    })
  );

  const getItems = useCallback(
    (incrementor: number) => {
      return [
        number + incrementor,
        number + 1 + incrementor,
        number + 2 + incrementor,
      ];
    },
    [number]
  );
  // this will stop react re-render the getItems function as the state change from parent component, it will only re-render by name changing.
  // the different between useCallback and useMemo is the passing value for callback is function, you have to call it in the child components,
  // however, usememo is just value, you dont have to call it.
  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Lazy />
      </Suspense>
    </div>
  );
}
