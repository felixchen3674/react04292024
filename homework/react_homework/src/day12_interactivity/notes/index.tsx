import { useState } from 'react';
import './index.css';
import MycComponent from './MycComponent';

export default function Day12Play() {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [author, setAuthor] = useState<string>('mia');
  return (
    <div>
      <h1>Day 122 Notes</h1>
      <h2>Add a New Blog</h2>
      <form>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog content:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mia">mia</option>
          <option value="zhe">zhe</option>
        </select>
        <button type="submit">Add a blog</button>
        <p>{author}</p>
      </form>
      {/* This is your play around code */}
      <MycComponent />
    </div>
  );
}
