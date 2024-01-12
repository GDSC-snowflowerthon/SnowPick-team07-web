import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./GlobalStyle"; // reset css용

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div
      style={{
        height: "100vh",
        backgroundImage: `url('/img/background.png')`,
      }}>
      <GlobalStyle />
      <App />
    </div>
  </React.StrictMode>
);
