import { Component, ReactNode } from "react";

interface CheckBoxProps {
  isChecked: boolean;
  onChange: () => void;
  label: string;
}

export class CheckBox extends Component<CheckBoxProps> {
  constructor(props: CheckBoxProps) {
    super(props);
  }
  render(): ReactNode {
    const { isChecked, onChange, label } = this.props;
    return (
      <div>
        <label>
          {label}
          <input type="checkbox" checked={isChecked} onChange={onChange} />
        </label>
      </div>
    );
  }
}
