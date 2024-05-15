import { useState } from "react";

interface FoodType {
    id: number;
    name: string;
}

function MyComponent() {
  const [foods, setFoods] = useState<FoodType[]>([]);
  const [newFood, setNewFood] = useState("");

  const handleAddFood = () =>{
    if(newFood.trim() !== ''){
        const newId = foods.length > 0 ? foods[foods.length-1].id+1 : 1
        const newFoodItem: FoodType = {id: newId, name: newFood.trim()} 

        setFoods([...foods, newFoodItem]);
        setNewFood('');
    }
  }

  const handleRemoveFood = (id: number) => {
    setFoods(foods.filter(food => food.id !== id))
  }
  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food) => (
            <li key={food.id}>
                {food.name}
                <button onClick={()=>handleRemoveFood(food.id)}>Remove</button>
            </li>
        ))}
      </ul>
      <input
        type="text"
        id="foodInput"
        placeholder="Enter food name"
        value={newFood}
        onChange={(e)=>setNewFood(e.target.value)}
      />
      <button onClick={handleAddFood}>Add food</button>
    </div>
  );
}

export default MyComponent;
