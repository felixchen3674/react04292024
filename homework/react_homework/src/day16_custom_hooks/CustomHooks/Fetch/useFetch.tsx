import React, {useEffect, useState} from "react"

// this is your homework, create a custom hook "useFetch" to simplify the fetching process

// imagine you have to implement the same fetching, loading, and error logic for another component
// such as Comments, Todos, Users, etc. (if you are not sure what I'm talking about, just try to
// create another component that fetches from https://jsonplaceholder.typicode.com/todos, and you will
// find yourself rewriting the same logic)

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export default function useFetch(url: string): Post[] | null {
  const [data, setData] = useState<Post[] | null>(null)
  const [loading, setIsloading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url)

        if (!res.ok) {
          throw new Error("Someting went wrong with fetching data")
        }

        const fetchedData = await res.json()
        setData(fetchedData)
      } catch (err: unknown) {
        setError(err as Error)
      } finally {
        setIsloading(false)
      }
    }
    fetchData()
  }, [])

  return data
}
