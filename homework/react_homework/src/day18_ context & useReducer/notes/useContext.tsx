import React, { createContext, useState, useContext } from "react";

const appContext = createContext(null);
export default function useContextFunction() {
  const [userName, setUserName] = useState("PedroTech");

  return (
    <appContext.Provider value={{ userName, setUserName }}>
      <div>
        {userName}
        <Child />
      </div>
    </appContext.Provider>
  );
}
export const Child = () => {
  return <Grandchild />;
};
export const Grandchild = () => {
  const { setUserName } = useContext(appContext);
  return (
    <div>
      <button onClick={() => setUserName("PedroTechnologies")}>
        ChildrenButton
      </button>
    </div>
  );
};
