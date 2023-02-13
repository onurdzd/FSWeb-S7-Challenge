import React from "react";
import { Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import HomePage from "./Components/HomePage";
import "./App.css";
import Restoranlar from "./Components/Restoranlar";

const App = () => {
  return (
    <>
      <Route exact path={"/"}>
        <HomePage></HomePage>
        <Restoranlar></Restoranlar>
      </Route>
      <Route path={"/pizza"}>
        <Form></Form>
      </Route>
      <Footer></Footer>
    </>
  );
};
export default App;
