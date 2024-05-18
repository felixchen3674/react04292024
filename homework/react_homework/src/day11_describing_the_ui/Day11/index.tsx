import React from 'react'
import ShowHideParagraph from './ShowHideParagraph';

export default function Day11() {

  const handleOnMouseEnter = (e) => {
    e.target.disabled = true;
  }

  const handleOnMouseLeave = (e) => {
    e.target.disabled = false;
  }

  return (
    <>
      <button 
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}>
        Hover me to disable
      </button>
      <ShowHideParagraph/>
    </>
  )
}
