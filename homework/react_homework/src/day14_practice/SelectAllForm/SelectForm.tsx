import { Component, ReactNode } from "react";
import { CheckBox } from "./CheckboxWithClass";

type ItemType = {
  id: number;
  name: string;
  isChecked: boolean;
};

interface StateType {
  items: ItemType[];
}

const items = [
  { id: 1, name: "item1", isChecked: false },
  { id: 2, name: "item2", isChecked: false },
  { id: 3, name: "item3", isChecked: false },
];

export class SelectForm extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      items: items,
    };
  }

  handleOnChange = (id: number) => {
    const newItems = this.state.items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item };
        newItem.isChecked = !newItem.isChecked;
        return newItem;
      } else {
        return item;
      }
    });
    this.setState({ items: newItems });
  };

  handleSelectAll = (isCheckAll: boolean) => {
    const newItems = this.state.items.map((item) => {
      item.isChecked = !isCheckAll;
      return item;
    });
    this.setState({ items: newItems });
  };

  render(): ReactNode {
    const { items } = this.state;
    const isCheckAll = items.every((item) => item.isChecked === true);
    return (
      <div>
        <div>
          <h1>Select Item:</h1>
          <div>
            {items
              .filter((item) => item.isChecked)
              .map((item) => {
                return item.name;
              })
              .join(",")}
          </div>
        </div>
        <div>
          <CheckBox
            isChecked={isCheckAll}
            onChange={() => this.handleSelectAll(isCheckAll)}
            label="Select All"
          />
        </div>
        <div>
          {items.map((item) => {
            return (
              <CheckBox
                key={item.id}
                isChecked={item.isChecked}
                onChange={() => this.handleOnChange(item.id)}
                label={item.name}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
