import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import store from "./many_practices/EmployeeTable/store/store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
