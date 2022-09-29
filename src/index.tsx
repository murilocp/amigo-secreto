import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
