import DebouncedInput from "../CustomHooks/Debounce/DebouncedInput";
import Posts from "../CustomHooks/Fetch/Posts";
import Todos from "../CustomHooks/Fetch/Todos";
import AutoFocusInput from "../Ref/AutoFocusInput";
import LoginForm from "../Ref/LoginForm";
import HoverCounter from "./HoverCounter";
import ClickCounter from "./ClickCounter";

// import { ClickCounter } from "./ClickCounter";
// import { HoverCounter } from "./hoverCounter";
import UseRef from "./useRef";
import ParentTwo from "../../day17_performance/notes/parentTwo";
import UseMemo from "../../day17_performance/notes/usememo";
import UseCallBack from "../../day17_performance/notes/useCallBack";

export default function Day16Play() {
  return (
    <div>
      <h1>Day 16 Play</h1>
      {/* Homework */}
      {/* <>
        <Posts />
        <Todos />
      </> */}
      {/* <DebouncedInput /> */}
      {/* <AutoFocusInput /> */}
      {/* <LoginForm /> */}
      {/* <UseRef />
      <ClickCounter />
      <HoverCounter /> */}
      {/* <ParentTwo /> */}
      {/* <UseMemo /> */}
      <UseCallBack />
    </div>
  );
}
