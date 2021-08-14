import { Fragment } from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Sample } from "./Sample";

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Sample />
    </Fragment>
  );
};

export default App;
