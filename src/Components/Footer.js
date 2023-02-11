import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "./Header";

const FooterDiv = styled.div`
  background-color: rgb(52 78 46);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 700;
  padding: 1rem;
  border-radius: 1rem;

  button {
    background-color: white;
    color: black;
    border: 1px solid black;
    border-radius: 1rem;
    padding: 1rem;
    font-size: 1.1rem;
    cursor: pointer;
    &:hover {
      background-color: grey;
      color: white;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <FooterDiv>
        <Link to={"/"}>
          <button>Ana Sayfa</button>
        </Link>
        <button>Hakkımızda</button>
        <button>İletişim</button>
      </FooterDiv>
    </Container>
  );
};

export default Footer;
