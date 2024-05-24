import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./redux/cakeContainer";

function App() {
  return (
    <div>
      <Provider store={store}>
        <CakeContainer />
      </Provider>
    </div>
  );
}

export default App;
