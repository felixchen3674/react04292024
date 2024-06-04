import "./App.css";
import ReduxTodoSolution from "./ReduxTodoSolution";
import Day11Play from "./day11_describing_the_ui/notes";
import Checkbox from "./day12_interactivity/ControlledComponents/Checkbox";
import RadioGroup from "./day12_interactivity/ControlledComponents/RadioGroup";
import TodoListApp from "./day12_interactivity/TodoListApp";
import Select from "./day12_interactivity/ControlledComponents/Select";
import FetchPost from "./day13_lifecycles/FetchPost";
import SelectAllForm from "./day14_practice/SelectAllForm";
import ShoppingCart from "./day14_practice/ShoppingCart";
import Day12Play from "./day12_interactivity/notes";
import Day13Play from "./day13_lifecycles/notes";
import Day14Play from "./day14_practice";
import Day16Play from "./day16_custom_hooks/notes";
import Day17Play from "./day17_performance/notes";
import Day21Play from "./day21_routing/notes";
import Day22Play from "./day22_testing";
import ColorPicker from "./many_practices/ColorPicker";

function App() {
  const colorOptions : string[] = ['red', 'green', 'blue', 'orange', 'purple'];
  return (
    <>

      <ColorPicker initialSelectedColor="red" colorPickerOptions={colorOptions} />
    </>
  );
}

export default App;
