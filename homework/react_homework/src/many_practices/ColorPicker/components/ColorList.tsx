import React from 'react';
import { Color } from '../data/colors';

interface ColorListProps {
  colorPickerOptions: Color[];
  onColorSelect: (id: string) => void;
}

export default function ColorList({
  colorPickerOptions,
  onColorSelect,
}: ColorListProps) {
  return (
    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
      {colorPickerOptions.map((color) => {
        return (
          <span
            key={color.id}
            style={{
              backgroundColor: color.color,
              width: '60px',
              height: '60px',
              display: 'inline-block',
              cursor: 'pointer',
              border: '1px solid #000',
            }}
            onClick={() => onColorSelect(color.id)}
          ></span>
        );
      })}
    </div>
  );
}
