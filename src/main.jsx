import React from "react";

import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import './index.css';

import store from "./store";

import App from "./App";

import "./styles/globals.css";
import "./styles/variables.css";
import "./styles/animations.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);