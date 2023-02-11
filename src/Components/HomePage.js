import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header, { Container } from "./Header";
import img from "../Img/home-selection.jpg";

const Main = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background:url("${img}");
  background-size: cover;

  button{
    &:hover{
    transition: transform .3s;
    transform: scale(1.2);}
  
  }
`;

const HomePage = () => {
  return (
    <Container>
      <Header></Header>
      <Link to={"/pizza"}>
        <Main>
          <div>
            <button id="order-pizza">Hemen Sipariş Oluştur!</button>
          </div>
        </Main>
      </Link>
    </Container>
  );
};

export default HomePage;
