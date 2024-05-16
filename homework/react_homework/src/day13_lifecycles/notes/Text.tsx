import { useEffect } from "react";

export default function Text() {
  useEffect(() => {
    console.log("Components did mount");
    return () => {
      console.log("component unmount");
    };
  }, []);

  return (
    <div>
      <h1>text</h1>
    </div>
  );
}
