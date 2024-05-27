import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./redux/cakes/cakeContainer";
import IcecreramContainer from "./redux/iceCream/IcecreramContainer";
import NewCakeContainer from "./redux/newCakeContainer";
import ItemContainer from "./redux/ItemContainer";
import UserContainer from "./redux/userContainer";
// import HookCakeContainer from "./redux/HookCakeContainer";

function App() {
  return (
    <div>
      <Provider store={store}>
        {/* <CakeContainer />
        <HookCakeContainer />
        <IcecreramContainer />
        <NewCakeContainer />
        <ItemContainer cakes />
        <ItemContainer /> */}
        <UserContainer />
      </Provider>
    </div>
  );
}

export default App;
