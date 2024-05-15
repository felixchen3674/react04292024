export default function RadioGroup() {
  return (
    <div>
      <label>
        Completed All Todo's of the day?
        <label>
          Yes-
          <input type="radio" name="yon" value={"Yes"}></input>
        </label>
        <label>
          No-
          <input type="radio" name="yon" value={"No"}></input>
        </label>
      </label>
    </div>
  );
}
