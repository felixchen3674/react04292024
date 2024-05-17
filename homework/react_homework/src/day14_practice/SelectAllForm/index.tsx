import { useState } from "react";

export default function SelectAllForm() {
  const [item, setItems] = useState<string[]>([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (item.some((item) => item === e.target.value)) {
        return;
      } else {
        setItems([...item, e.target.value]);
      }
    } else {
      const newItem = item.filter((item) => item !== e.target.value);
      setItems(newItem);
      setIsCheckAll(false);
    }
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setItems(["item1", "item2", "item3"]);
      setIsCheckAll(true);
    } else {
      setItems([]);
      setIsCheckAll(false);
    }
  };

  return (
    <div>
      <h1>SelectAllForm</h1>
      <div>
        <h2>All selected item:</h2>
        {item ? <h3>{item.toString()}</h3> : null}
        <div>
          <label>
            Select All items
            <input
              type="checkbox"
              onChange={handleSelectAll}
              checked={isCheckAll}
            />
          </label>
        </div>
        <div>
          <label>
            Item1
            <input
              type="checkbox"
              onChange={handleOnChange}
              value={"item1"}
              checked={item.includes("item1")}
            />
          </label>
          <label>
            Item2
            <input
              type="checkbox"
              onChange={handleOnChange}
              value={"item2"}
              checked={item.includes("item2")}
            />
          </label>
          <label>
            Item3
            <input
              type="checkbox"
              onChange={handleOnChange}
              value={"item3"}
              checked={item.includes("item3")}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
