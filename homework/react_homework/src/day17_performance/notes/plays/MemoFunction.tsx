import React, { useState, useMemo, useEffect, useCallback } from 'react';

export default function MemoFunction() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  return (
    <>
      <div style={themeStyles}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Change Theme
        </button>
      </div>
      <List getItems={getItems} />
    </>
  );
}

function List({ getItems }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems());
    console.log('updating items');
  }, [getItems]);
  return (
    <div>
      {items.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
}
