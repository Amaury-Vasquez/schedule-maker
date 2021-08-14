import ReactDom from "react-dom";
import App from "./components/App";
import { registerServiceWorker } from "./registerServiceWorker";

ReactDom.render(<App />, document.getElementById("app"));
registerServiceWorker();
