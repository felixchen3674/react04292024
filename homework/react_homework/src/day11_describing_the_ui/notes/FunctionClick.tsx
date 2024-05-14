export default function FunctionClick() {
  const handleOnclick = function () {
    console.log("button clicked");
  };
  return <button onClick={handleOnclick}>Button</button>;
}
