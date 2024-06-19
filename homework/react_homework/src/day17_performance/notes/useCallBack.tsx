import React, {
  Suspense, // indicate the component will do lazy loading
  lazy, // import lazy method
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import List from "./List";
// import Lazy from "./lazy";

export default function UseCallBack() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  function wait(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  // const Lazy = lazy(() => import("./lazy")); One way with exporting function as default
  // create code spliting components by using lazy keyword and path as parameter to pass in a call back function.
  // If the component didn't export the function as default, this is the second way
  const Lazy = lazy(() =>
    wait(1000)
      .then(() => import("./lazy"))
      .then((module) => {
        return { default: module.Lazy };
      })
  ); // this is the way to warp the component to be lazy component and only will download if we need it

  const getItems = useCallback(
    (incrementor: number) => {
      console.log("usecallback");
      return [
        number + incrementor,
        number + 1 + incrementor,
        number + 2 + incrementor,
      ];
    },
    [number]
  );
  // const getItems = (incrementor: number) => {
  //   console.log("usecallback");
  //   return [
  //     number + incrementor,
  //     number + 1 + incrementor,
  //     number + 2 + incrementor,
  //   ];
  // };

  // this will stop react re-render the getItems function as the state change from parent component, it will only re-render by name changing.
  // the different between useCallback and useMemo is the passing value for callback is function, you have to call it in the child components,
  // however, usememo is just value, you dont have to call it.
  // const theme = {
  //   backgroundColor: dark ? "#333" : "#FFF",
  //   color: dark ? "#FFF" : "#333",
  // };
  const theme = useMemo(() => {
    return {
      backgroundColor: dark ? "#333" : "#FFF",
      color: dark ? "#FFF" : "#333",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme Change");
  }, [theme]);

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
      <button
        onClick={() => {
          import("./lazy").then((module) => {
            /// this is  code splitting that will not download the file when it is not using
            alert(module.sum(2, 2));
          });
        }}
      >
        Add 2+2
      </button>
      <List getItems={getItems} />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Lazy />
      </Suspense>
    </div>
  );
}
