import Box from "./components/Box/Box";
import Pages from "./pages";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
const Main = () => {
  return (
    <Provider store={store}>
      <Pages />
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
