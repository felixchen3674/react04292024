import { render } from '@testing-library/react'
import React, { useEffect, useRef, useState } from 'react'
import useLocalStorage from './useLocalStorage'
import useUpdateLogger from './useUpdateLogger';



export default function NewIndex2() {
    // const [name, setName] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);
    // const prevName = useRef('')
    
    // function focus(){
        //     inputRef.current.focus()
        // }
        
        
        // useEffect(()=>{
            //     prevName.current = name
            // }, [name])
            
            //HOOKS
            const [name, setName] = useLocalStorage('name', '')
            useUpdateLogger(name)

    return (
        <>
            {/* <input type="value" onChange={ e => setName(e.target.value)}/>
            <div>My name is {name} and it used to be {prevName.current}</div>
            <button onClick={focus}>Focus</button> */}
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
        </>
    )
}

