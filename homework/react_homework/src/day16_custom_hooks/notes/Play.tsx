import React, { useState } from 'react';
import useLocalStorge from './useLocalStorge';

export default function Play() {
  const [name, setName] = useLocalStorge('name', () => '');
  return (
    <input
      type="text"
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}
    />
  );
}
