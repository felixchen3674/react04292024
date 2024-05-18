import { useState } from "react";

export default function ConditionalRender() {
  const [isHovered, setIsHovered] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };
  const handleLeaver = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <div>
        <button
          disabled={isHovered}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeaver}
        >
          Button
        </button>
      </div>
      <div>
        <button onClick={() => setShowText((pre) => !pre)}>
          Toggle Button
        </button>
      </div>
      <div>
        {showText && <p>aahishdiadklsdhlskhdslkhdlskhsdlkhslkhsdlkhslksll</p>}
      </div>
    </div>
  );
}
