interface CheckBoxType {
  checked: boolean;
  onChange: () => void;
}

export function CheckboxR(props: CheckBoxType) {
  const { checked, onChange } = props;
  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        Completed
      </label>
    </div>
  );
}
