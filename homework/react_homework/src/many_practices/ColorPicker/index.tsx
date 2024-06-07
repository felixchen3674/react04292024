import React, { useState } from "react";
import { color } from "./colorList";

export default function ColorPicker() {
  const colors = color;
  const [backgroudColor, setBackgroundColor] = useState(color[0]);

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };
  return (
    <div className="mainContainer">
      <div
        className="colorContainer"
        style={{ backgroundColor: backgroudColor }}
      >
        <div className="textContainer" style={{ color: backgroudColor }}>
          {backgroudColor}
        </div>
      </div>
      <div className="colorPickerContainer">
        {colors.map((color) => {
          return (
            <div
              key={color}
              className="color"
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
