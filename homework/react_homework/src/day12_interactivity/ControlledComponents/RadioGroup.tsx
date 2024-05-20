import { useState } from 'react';

const emotions = [
  { id: 1, mood: 'happy' },
  { id: 2, mood: 'sad' },
  { id: 3, mood: 'netrual' },
];
export default function RadioGroup() {
  const [currMood, setCurrMood] = useState<string>('sad');
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrMood(e.target.value);
  };
  return (
    <div>
      {emotions.map((emotion) => {
        return (
          <>
            <input
              type="radio"
              name="emotion"
              value={emotion.mood}
              key={emotion.id}
              checked={emotion.mood === currMood}
              onChange={handleOptionChange}
            />
            <label key={emotion.id}>{emotion.mood}</label>
            <br />
          </>
        );
      })}
      <>my emotion is {currMood}</>
    </div>
  );
}
