import React, { useState } from 'react';
import ColorList from './components/ColorList';
import { colors } from './data/colors';

export default function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState<string>(colors[1]?.id);

  const onColorSelect = (id: string) => {
    setSelectedColor(id);
  };

  const currentColor = colors.find(
    (color: Color) => color.id === selectedColor
  );

  return (
    <div>
      <h1>ColorPicker</h1>
      <div
        style={{
          width: '280px',
          height: '280px',
          backgroundColor: currentColor?.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '24px',
          border: '1px solid #000',
        }}
      >
        {currentColor?.color || 'SelectedColor'}
      </div>
      <ColorList colorPickerOptions={colors} onColorSelect={onColorSelect} />
    </div>
  );
}
