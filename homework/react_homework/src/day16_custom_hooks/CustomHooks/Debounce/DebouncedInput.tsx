import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

function apiCall(searchQuery: string) {
  console.log('api called...');
}

export default function DebouncedInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedTerm) {
      apiCall(debouncedTerm);
    }
  }, [debouncedTerm]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
