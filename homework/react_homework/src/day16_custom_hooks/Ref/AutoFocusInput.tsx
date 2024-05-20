import React, { useRef, useEffect, useState } from "react";

export default function AutoFocusInput() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div>
      <div>This input element should be auto focused when page loads</div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
