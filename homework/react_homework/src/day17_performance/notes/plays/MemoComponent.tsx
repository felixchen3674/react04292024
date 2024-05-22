import React, { useState, memo } from 'react';

export default function MemoComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Zhe');
  console.log('parents rendered');
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <p>I am Parents</p>
      <p>count:{count}</p>
      <button onClick={() => setCount((pre) => pre + 1)}>+1</button>
      <button onClick={() => setName('NameNew')}>Change Name</button>
      <MemoChild name={name} />
    </div>
  );
}
interface ChildProps {
  name: string;
}

function Child({ name }: ChildProps) {
  console.log('child rendered');
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      I am Child {name}
    </div>
  );
}
const MemoChild = memo(function Child({ name }: ChildProps) {
  console.log('child rendered');
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      I am Child {name}
    </div>
  );
});
