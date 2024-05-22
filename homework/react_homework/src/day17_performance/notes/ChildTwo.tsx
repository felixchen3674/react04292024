import React from 'react'



export function ChildTwo() {
    console.log('ChildTwo render')

    return (
        <div>
            Child component
        </div>
    )
}


export const MemoizedChildTwo = React.memo(ChildTwo)
