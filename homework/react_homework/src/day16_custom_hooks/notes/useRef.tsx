import { useEffect, useRef, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import UseLogger from "./useLogger";
import useToggle from "./useToggle";

export default function UseRef() {
  const [input, setInput] = useLocalStorage("name", "");
  UseLogger(input);
  const renderCount = useRef(1);
  const prevName = useRef("");
  const inputRef = useRef<any>();

  const [isVisible, toggle] = useToggle(false);
  function focus() {
    inputRef.current.focus();
    //use case: to focus on specify html element like using queryselector
    // do not use useRef to modify something you want to render ,it will cause issue that the info won't rerender because of that.
  }

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    prevName.current = input;

    // in those two case, useRef actually record the preState value without causing rerender ; for count it acutally has the same
    // logic because the first render has causing the count to be 1 , but useeffect was changed the value after render;
  }, [input]);
  return (
    <div>
      <div>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>{renderCount.current}</div>
      <div>PrevName: {prevName.current}</div>
      <button onClick={focus}>Focus</button>
      <div>
        <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      </div>
    </div>
  );
}
