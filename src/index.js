import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-131591887-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
    <App />,
  document.getElementById("root")
);
registerServiceWorker();
