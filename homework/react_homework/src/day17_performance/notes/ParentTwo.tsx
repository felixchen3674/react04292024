import { useState } from 'react'
import {MemoizedChildTwo} from './ChildTwo'


function ParentTwo({}) {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("anthony")

    console.log('parent render')

    return (
        <>
            <button onClick={() => setCount((c) => c + 1)}>
                Count - {count}
            </button>
            <button onClick={()=> setName('kanghoon')}>Change name</button>
            <MemoizedChildTwo name={name} />
        </>
    )
}

export default ParentTwo