import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./config/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
