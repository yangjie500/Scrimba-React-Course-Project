import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import "./css/styles.css";
import { ContextProvider } from "./context";
import App from "./App";

ReactDOM.render(
  <ContextProvider>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </ContextProvider>
  , document.getElementById("root"));