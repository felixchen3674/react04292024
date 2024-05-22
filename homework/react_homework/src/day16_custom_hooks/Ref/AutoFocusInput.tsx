import {useEffect, useRef} from "react"

export default function AutoFocusInput() {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])
  return (
    <div>
      <div>This input element should be auto focused when page loads</div>
      <input ref={inputRef} />
    </div>
  )
}
