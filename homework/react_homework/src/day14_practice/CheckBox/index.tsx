import React from 'react'

interface CheckBoxProps {
    isChecked: boolean,
    handleSelect: () => void;
    name: string
}

export default function CheckBox({ isChecked, handleSelect, name }: CheckBoxProps) {
  return (
    <label>
        <input 
            type='checkbox'
            checked={isChecked}
            onChange={handleSelect}/>
        {name}
    </label>
  )
}
