import "./App.css";
import Day11Play from "./day11_describing_the_ui/notes";
import Day12Play from "./day12_interactivity/notes";
import TodoList from "./day12_interactivity/ControlledComponents/ToDoList";
import MyComponent from "./day11_describing_the_ui/notes/MyComponent";
import Day13Play from "./day13_lifecycles/notes";
import PostViewer from "./day13_lifecycles/homework/fetchpost";
import CounterTimer from "./day13_lifecycles/homework/CounterTimer";
import SelectAllForm from "./day14_practice/SelectAllForm";
import SelectAllForm2 from "./day14_practice/SelectAllForm/index2";
import ShoppingCart from "./day14_practice/ShoppingCart";
import Day14Play from "./day14_practice";
import NewIndex2 from "./day16_custom_hooks/notes/NewIndex2";
import DebouncedInput from "./day16_custom_hooks/CustomHooks/Debounce/DebouncedInput";
import Posts from "./day16_custom_hooks/CustomHooks/Fetch/Posts";
import Todos from "./day16_custom_hooks/CustomHooks/Fetch/Todos";
import AutoFocusInput from "./day16_custom_hooks/Ref/AutoFocusInput";
import ParentTwo from "./day17_performance/notes/ParentTwo";
import PureComp from "./day17_performance/notes/PureComp";
import ParentComp from "./day17_performance/notes/ParentComp";
import BirthdayRecord from "./day17_performance/BirthdayRecord";
import DebouncedCallback from "./day17_performance/DebouncedCallback";
import CountingStar, { Parent } from "./day18_context/notes";
import TodoList18 from "./day18_context/Todo/TodoList18";
import CakeContainer from "./day19_redux/notes/CakeContainer";
import { Provider } from "react-redux";
import store from "./day19_redux/homework/store";
import TodoList19 from "./day19_redux/homework/TodoList19";



function App() {
  return (
    <Provider store={store}>
      {/* <AutoFocusInput /> */}
      {/* <ParentTwo /> */}
      {/* <ParentComp /> */}
      {/* <BirthdayRecord /> */}
      {/* <DebouncedCallback />
      <CountingStar /> */}
      {/* <TodoList18 /> */}
      {/* <CakeContainer /> */}
      <TodoList19 />
    </Provider>
  );
}

export default App;
