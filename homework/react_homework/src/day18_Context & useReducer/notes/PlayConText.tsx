import React, { createContext, useContext, useState } from 'react';

interface AppContextValues {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}
const defaultContextValue: AppContextValues = {
  username: '',
  setUsername: () => {},
};

const AppContext = createContext(defaultContextValue);
export default function Parent() {
  const [username, setUsername] = useState('zhe');
  return (
    <div>
      <AppContext.Provider value={{ username, setUsername }}>
        <Child />
      </AppContext.Provider>
    </div>
  );
}

function Child() {
  const { username } = useContext(AppContext);
  return (
    <div>
      <div>{username}</div>
      <GrandChild />
    </div>
  );
}

function GrandChild() {
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <button onClick={() => setUsername('NewName')}>ChangeName</button>
    </div>
  );
}
