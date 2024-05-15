import { useState, ChangeEvent } from 'react';

interface Car {
  year: number;
  make: string;
  model: string;
}

export default function MyComponent() {
  const [car, setCar] = useState<Car>({
    year: 2024,
    make: 'ford',
    model: 'Mustang',
  });

  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCar((c) => ({ ...c, year: parseInt(e.target.value) }));
  };

  const handleMakeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCar((c) => ({ ...c, make: e.target.value }));
  };

  const handleModelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCar((c) => ({ ...c, model: e.target.value }));
  };

  return (
    <div>
      <p>
        Your car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <input type="text" value={car.model} onChange={handleModelChange} />
    </div>
  );
}
