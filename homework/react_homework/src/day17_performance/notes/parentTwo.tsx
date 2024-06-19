import { PureComponent, useState } from "react";
import { MemorizeChildTwo } from "./children";
export default function ParentTwo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Tom");
  console.log("parent render");
  return (
    <div>
      <div>
        <button onClick={() => setCount((pre) => pre + 1)}>
          Count: {count}
        </button>
      </div>
      <div>
        <button onClick={() => setName("Jack")}>Change Name</button>
      </div>
      <div>
        <MemorizeChildTwo name={name} />
      </div>
    </div>
  );
}
// pureComponent will check the value of the state or the reference of state variable to decide if it is need to be re-render;
// for creating pureComponent just simply use class components to extend the pureComponent instead of components


// export class pureComponent extends PureComponent{

// }


// if no change, it won't re-render;
