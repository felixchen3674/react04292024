import React, { useEffect } from 'react'

export default function Home() {
    useEffect(()=>{
        window.scroll(0,0)
    },[])
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
