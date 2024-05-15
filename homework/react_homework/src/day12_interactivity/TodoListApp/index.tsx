import React, { useState, ChangeEvent, FormEvent } from "react";
import ListItem from "../components/ListItem/index.tsx";
import Checkbox from "../ControlledComponents/Checkbox.tsx";
import RadioGroup from "../ControlledComponents/RadioGroup.tsx";
import Select from "../ControlledComponents/Select.tsx";

export default function TodoListApp() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItems([...items, inputValue]);
    setInputValue('');
  }

  const handleInputChange  = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleDelete = (index: number) => {
    return () => {
      setItems(items.filter((_, i) => i !== index));
    }
  }

  const handleEdit = (index: number, inputValue: string) => {
    return () => {
      setItems(items.map((item, i) => (i === index ? inputValue : item)))
    }
  }

  // write your todo list app here
  return <div>
    <header>TODO LIST</header>
    <form onSubmit={handleSubmit}>
      <input type="text"
             value={inputValue}
             onChange={handleInputChange }
            placeholder="add item..."></input>
      <button type="submit">Add</button>
    </form>
    <ul>
      {
        items.map((listItem, index) => {
          return <ListItem key={index} task={listItem} handleDelete={handleDelete(index)} handleEdit={handleEdit(index, inputValue)}/>
        })
      }
    </ul>
    <Checkbox/>
    <RadioGroup/>
    <Select/>
  </div>;
}
