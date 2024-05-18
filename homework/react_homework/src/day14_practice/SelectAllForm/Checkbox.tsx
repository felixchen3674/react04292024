interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  label?: string;
}

// import { Component, ReactNode } from "react";

export default function Checkbox({ checked, onChange, label }: CheckboxProps) {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
}

// interface CheckBoxProps {
//   isChecked: boolean;
//   onChange: () => void;
//   label: string;
// }

// export class CheckBox extends Component<CheckBoxProps> {
//   constructor(props: CheckBoxProps) {
//     super(props);
//   }
//   render(): ReactNode {
//     const { isChecked, onChange, label } = this.props;
//     return (
//       <div>
//         <label>
//           {label}
//           <input type="checkbox" checked={isChecked} onChange={onChange} />
//         </label>
//       </div>
//     );
//   }
// }
