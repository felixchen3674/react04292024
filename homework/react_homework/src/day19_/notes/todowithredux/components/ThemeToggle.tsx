import { useDispatch, useSelector } from "react-redux";
import { themeAction } from "../redux/theme/ThemeAction";
import { StateType } from "../redux/RootReducer";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const themeStatus = useSelector((state: StateType) => {
    return state.theme === "light" ? "black" : "light";
  });
  const handleOnClick = () => {
    dispatch(themeAction(themeStatus));
  };
  return (
    <div>
      <button onClick={handleOnClick}>Change Theme</button>
    </div>
  );
}
