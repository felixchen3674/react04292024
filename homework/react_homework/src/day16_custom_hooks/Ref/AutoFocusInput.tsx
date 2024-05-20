import React, { useEffect, useRef } from "react";

export default function AutoFocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <div>This input element should be auto focused when page loads</div>
      <label>
        This input will be auto focused
        <input ref={inputRef} />
      </label>
    </div>
  );
}
