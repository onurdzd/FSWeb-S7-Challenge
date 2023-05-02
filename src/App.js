import React, { useState } from "react";
import { Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import HomePage from "./Components/HomePage";
import "./App.css";
import Restoranlar from "./Components/Restoranlar";
import Siparis from "./Components/Siparis";
import Header from "./Components/Header";

const App = () => {
  const [siparis, setSiparis] = useState([]);
  const [malzemeIsim, setMalzemeIsim] = useState([]);
  return (
    <>
      <Route exact path={"/"}>
        <HomePage></HomePage>
        <Restoranlar></Restoranlar>
        <Footer></Footer>
      </Route>
      <Route path={"/pizza"}>
        <Header></Header>
        <Form
          setSiparis={setSiparis}
          siparis={siparis}
          malzemeIsim={malzemeIsim}
          setMalzemeIsim={setMalzemeIsim}
        ></Form>
        <Footer></Footer>
      </Route>
      <Route path={"/siparis"}>
        <Header></Header>
        <Siparis
          setSiparis={setSiparis}
          siparis={siparis}
          malzemeIsim={malzemeIsim}
          setMalzemeIsim={setMalzemeIsim}
        ></Siparis>
        <Footer></Footer>
      </Route>
    </>
  );
};
export default App;
