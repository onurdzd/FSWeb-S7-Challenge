import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Teknolojik Yemekler</h1>
      <p>Burdaki kodu silip kendi headerınızı ekleyebilirsiniz</p>
      <Link to={"/pizza"}>
        <button id="order-pizza">Sipariş Oluştur!</button>
      </Link>
    </div>
  );
};

export default HomePage;
