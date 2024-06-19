import React, { Component } from "react";

export default class CheckBox1 extends Component<{
  checked: boolean;
  onChange: () => void;
}> {
  constructor(props) {
    super(props);
  }
  render() {
    const { checked, onChange } = this.props;
    return <input type="checkbox" checked={checked} onChange={onChange} />;
  }
}
