import { useState } from 'react';

const emotions = [
  { id: 1, mood: 'happy' },
  { id: 2, mood: 'sad' },
  { id: 3, mood: 'netrual' },
];

export default function Select() {
  const [currMood, setCurrMood] = useState<string>('sad');
  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrMood(e.target.value);
  };
  return (
    <div>
      <select name="moods" onChange={handleOptionChange}>
        {emotions.map((emotion) => (
          <option value={emotion.mood}>{emotion.mood}</option>
        ))}
      </select>

      <>my emotion is {currMood}</>
    </div>
  );
}
