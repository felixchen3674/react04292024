import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import ColorDisplay from "./components/ColorDisplay";
import "./index.css";

const colorList = ["red", "green", "grey", "blue", "purple"];

export default function ColorPicker() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/red" />
        </Route>
        <Route path="/:color" component={ColorDisplay} />
      </Switch>
      <nav>
        <ul>
          {colorList.map((color) => {
            return (
              <li className={`nav-item background-color-${color}`} key={color}>
                <NavLink to={`/${color}`} className="color-link" />
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
