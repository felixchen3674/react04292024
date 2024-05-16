import { useState } from "react";
import Text from "./Text";

export default function UseEffectCycle() {
  const [showText, setShowText] = useState(false);
  return (
    <div>
      <button onClick={() => setShowText((pre) => !pre)}>showText</button>
      {showText && <Text />}
    </div>
  );
}
