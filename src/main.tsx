import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./assets/css/responsive.css";
import { BrowserRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
// icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faEnvelope,
  // faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { IntlProvider } from "react-intl";
import English from "./data/English.json";
import Persian from "./data/Persian.json";
import "./fonts/B-NAZANIN.ttf";
let local = navigator.language;
let lan;
if (local === "en-US") {
  lan = English;
} else {
  lan = Persian;
}
// document.getElementsByTagName("html")[0].setAttribute("dir", "rtl"); //TODO
library.add(fab, faCheckSquare, faCoffee, faEnvelope);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <IntlProvider locale={local} messages={English}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlProvider>
  </React.StrictMode>
);
