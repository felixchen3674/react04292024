import {useEffect, useState} from 'react'

const URL = 'https://jsonplaceholder.typicode.com/posts/'

export default function FetchById() {
  const [id, setId] = useState(1)
  const [post, setPost] = useState('')

  function handlePrevPost() {
    if (id === 1) return
    setId((prev) => prev - 1)
  }

  function handleNextPost() {
    setId((prev) => prev + 1)
  }

  useEffect(() => {
    fetch(`${URL}${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [id])

  return (
    <>
      <h2>Fetch By Id</h2>
      <div>Post id: {id}</div>
      <div>Title: {post.title}</div>
      <div>Body: {post.body}</div>
      <button onClick={handlePrevPost}>Prev</button>
      <button onClick={handleNextPost}>Next</button>
    </>
  )
}
