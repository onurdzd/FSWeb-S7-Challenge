import React from "react";
import { Route } from "react-router-dom";
import Form from "./Components/Form";
import HomePage from "./Components/HomePage";

const App = () => {
  return (
    <>
      <Route exact path={"/"}>
        <HomePage></HomePage>
      </Route>
      <Route path={"/pizza"}>
        <Form></Form>
      </Route>
    </>
  );
};
export default App;
