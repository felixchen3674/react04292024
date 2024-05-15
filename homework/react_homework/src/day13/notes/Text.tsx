import { useEffect, useState } from 'react';

export default function Text() {
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    console.log('Component mounted.');
    return () => {
      console.log('Component unmounted');
    };
  }, []);
  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <p>{inputValue}</p>
    </div>
  );
}
