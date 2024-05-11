import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "./components/ui/toaster.jsx";
import { Provider } from "react-redux";
import store from "./redux/app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Toaster />
    <App />
  </Provider>
);
