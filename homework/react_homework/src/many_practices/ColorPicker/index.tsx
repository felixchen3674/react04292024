import React, {useState} from 'react'
import './index.css'

export default function ColorPicker({
  initialSelectedColor,
  colorPickerOptions,
}) {
  const [selectedColor, setSelectedColor] = useState(initialSelectedColor)

  const handleColorClick = (color) => {
    setSelectedColor(color)
  }

  return (
    <div>
      <h2>Color Picker</h2>
      <div className="selected-color" style={{backgroundColor: selectedColor}}>
        {selectedColor}
      </div>
      <div style={{display: 'flex'}}>
        {colorPickerOptions.map((color) => (
          <div
            key={color}
            className="color-option"
            style={{backgroundColor: color}}
            onClick={() => handleColorClick(color)}
          />
        ))}
      </div>
    </div>
  )
}
