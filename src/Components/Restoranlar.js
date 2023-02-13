import React from "react";
import styled from "styled-components";
import hamburger from "../Img/logos/hamburger.png";
import coffee from "../Img/logos/coffee-cup.png";
import pizza1 from "../Img/logos/pizza (1).png";
import pizza2 from "../Img/logos/pizza (2).png";
import pizza3 from "../Img/logos/pizza.png";
import garden from "../Img/logos/sprout.png";
import "./restoranlar.css";

const restoranListesi = [
  {
    marka: "McDonalds",
    sure: "20-30 dk.",
    urun: ["American", "Burgers", "Fast Food"],
    teslimat_ucreti: "5.99 TL",
    img: `${hamburger}`,
  },
  {
    marka: "Starbucks",
    sure: "20-30 dk.",
    urun: ["American", "Burgers", "Fast Food"],
    teslimat_ucreti: "5.99 TL",
    img: `${coffee}`,
  },
  {
    marka: "Pizza Hut",
    sure: "20-30 dk.",
    urun: ["American", "Burgers", "Fast Food"],
    teslimat_ucreti: "5.99 TL",
    img: `${pizza1}`,
  },
  {
    marka: "Dominos",
    sure: "20-30 dk.",
    urun: ["American", "Burgers", "Fast Food"],
    teslimat_ucreti: "5.99 TL",
    img: `${pizza2}`,
  },
  {
    marka: "Pasaport Pizza",
    sure: "20-30 dk.",
    urun: ["American", "Burgers", "Fast Food"],
    teslimat_ucreti: "5.99 TL",
    img: `${pizza3}`,
  },
  {
    marka: "Sweet Garden",
    sure: "20-30 dk.",
    urun: ["American", "Burgers", "Fast Food"],
    teslimat_ucreti: "5.99 TL",
    img: `${garden}`,
  },
];

const RestoranImg = styled.img`
  width: 20%;
`;

const Restoranlar = () => {
  return (
    <div className="container flexbox">
      {restoranListesi.map((item, index) => (
        <div className="restoranCard restoranDivs" key={index}>
          <div>
            <RestoranImg src={item.img} alt="restoran logos"></RestoranImg>
          </div>
          <h3 className="restoranDivs">{item.marka}</h3>
          <div className="urunDiv restoranDivs">
            {item.urun.map((elem) => (
              <div>{elem}</div>
            ))}
          </div>
          <div className="sureucret restoranDivs">
            <span>{item.sure}</span>
            <span>{item.teslimat_ucreti}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Restoranlar;
