import React, { Component } from "react";

export default class CheckBox1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { checked, onChange } = this.props;
    return (
      <label>
        completed:
        <input type="checkbox" checked={checked} onChange={onChange} />
      </label>
    );
  }
}
