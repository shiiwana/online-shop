import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

const container = document.getElementById("root");
if (!container) throw new Error("Root element with ID 'root' not found in index.html");



createRoot(container).render(
  <Provider store={store}>
    <App />
  </Provider>
);
