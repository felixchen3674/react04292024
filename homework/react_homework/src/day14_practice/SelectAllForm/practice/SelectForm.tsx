import React, { Component } from "react";
import { itemsList } from "./SelectData";
import CheckBox1 from "./CheckBox1";
import { Item } from "..";

export default class SelectForm extends Component<{}, { items: Item[] }> {
  constructor(props) {
    super(props);
    this.state = {
      items: itemsList,
    };
  }

  handleOnChange = (id) => {
    const { items } = this.state;
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item };
        newItem.checked = !item.checked;
        return newItem;
      } else {
        return item;
      }
    });
    this.setState({ items: newItems });
  };

  handleOnAll = (allCheck) => {
    const { items } = this.state;
    const newItems = items.map((item) => {
      const newItem = { ...item };
      newItem.checked = !allCheck;
      return newItem;
    });
    this.setState({ items: newItems });
  };

  render() {
    const { items } = this.state;
    const allCheck = items.every((item) => item.checked === true);
    const string = items
      .filter((item) => item.checked)
      .map((item) => {
        return item.name;
      })
      .join(",");

    return (
      <div>
        <h4>{string}</h4>
        <div>
          <CheckBox1
            checked={allCheck}
            onChange={() => this.handleOnAll(allCheck)}
          />
          <h4>Select All</h4>
        </div>
        {items &&
          items.map((item) => {
            const { id, name, checked } = item;
            console.log(id, name, checked);
            return (
              <div key={id} style={{ display: "flex" }}>
                <CheckBox1
                  checked={checked}
                  onChange={() => this.handleOnChange(id)}
                />
                <h4>{name}</h4>
              </div>
            );
          })}
      </div>
    );
  }
}
