export default function Checkbox() {
  return (
    <div>
      <label>
        {" "}
        Check List:
        <label htmlFor="item1">Item1</label>
        <input type="checkbox" name="item1" id="item1" value={"item"} />
        {/* htmlfor will match the input id to ensure the accessibilty work well */}
        <label htmlFor="item2">Item2</label>
        <input type="checkbox" name="item2" id="item2" value={"item2"} />
        <label htmlFor="item3">Item3</label>
        <input type="checkbox" name="item3" id="item3" value={"item3"} />
      </label>
    </div>
  );
}
