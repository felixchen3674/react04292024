import React, { useEffect } from 'react'

interface Props {}

function useUpdateLogger(value) {
    useEffect(()=>{
        console.log(value)
    }, [value])
}

export default useUpdateLogger
