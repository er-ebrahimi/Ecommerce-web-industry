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
import { store } from "./redux/app/store";
import { Provider } from "react-redux";
import "./fonts/B-NAZANIN.ttf";
let local = navigator.language;
export let lan: any;
export let lan_string: string = "Persian";
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
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </IntlProvider>
  </React.StrictMode>
);
