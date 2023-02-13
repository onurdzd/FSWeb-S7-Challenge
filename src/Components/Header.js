import React from "react";
import styled from "styled-components";
import img from "../Img/home-main.jpg";

const BackgroundImg = styled.div`
  background-image: url(${img});
  border-radius: 1rem;
  margin-bottom: 1rem;
  background-size: cover;
`;

export const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 90vw;
  max-width: 1260px;
  padding: 1rem;
  font-size: 1.5rem;

  form {
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
      width: 50%;
      padding: 0.5rem;
      text-align: center;
      border-radius: 1rem;
      font-size: 1.2rem;
    }

    select {
      font-size: 1.2rem;
      padding: 0.5rem;
      border-radius: 1rem;
      text-align: center;
    }
  }

  h3 {
    background-color: #d4b4b4b3;
    border-radius: 1rem;
    padding: 0.5rem;
  }

  button {
    padding: 1rem;
    border-radius: 1rem;
    font-weight: 800;
    font-size: 1.3rem;
    cursor: pointer;
  }

  h5 {
    border-bottom: 1px solid black;
  }

  p {
    border-bottom: 1px solid black;
  }
`;

const Header = () => {
  return (
    <BackgroundImg>
      <Container>
        <h3>Pizza Dukkanı</h3>
        <h1>Teknolojik Yemekler</h1>
        <p>Hızlı,kolay ve güvenle sipariş verebilirsiniz</p>
      </Container>
    </BackgroundImg>
  );
};

export default Header;
