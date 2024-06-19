import React, { createContext, useState, useContext } from "react";

interface AppContextType {
  userName: string;
  setUserName: (name: string) => void;
}

const appContext = createContext<AppContextType | null>(null);

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
  // const context = useContext(appContext);

  // if (!context) {
  //   throw new Error("Grandchild must be used within an AppContextProvider");
  // }
  // const { setUserName } = context; option1
  const { setUserName } = useContext(appContext) as AppContextType; //option 2
  return (
    <div>
      <button onClick={() => setUserName("PedroTechnologies")}>
        ChildrenButton
      </button>
    </div>
  );
};
