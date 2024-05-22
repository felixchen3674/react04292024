import {useEffect, useState} from "react"

export default function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(
    function () {
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)

      return function () {
        clearTimeout(handler)
      }
    },
    [value, delay]
  )

  return debouncedValue
}
