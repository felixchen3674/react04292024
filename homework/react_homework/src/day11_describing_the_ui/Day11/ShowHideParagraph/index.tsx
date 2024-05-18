import React, { useState } from 'react'

export default function ShowHideParagraph() {

  const [isParagraphVisibility, setIsParagraphVisibility] = useState<boolean>(true)
  
  const handleParagraphShowOrHide = () => {
    setIsParagraphVisibility(!isParagraphVisibility);
  }
  
  return (
    <div>
        <button onClick={handleParagraphShowOrHide}>Paragraph</button>
        {isParagraphVisibility ? <p>This is a paragraph of text</p> : <></>}
    </div>
  )
}
