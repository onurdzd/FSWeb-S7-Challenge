import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Container } from "./Header";

const ButtonDiv = styled.div`
  width: 20%;
  background-color: #89cb89;
  color: black;
  border-radius: 1rem;
  padding: 0.5rem;
  font-size: 1.1rem;
  margin: 1rem auto;
  cursor: pointer;
  &:hover {
    background-color: grey;
    color: white;
  }
`;

const SiparisOzetDiv = styled.div`
  margin-left: 0.5rem;
  display: inline-block;
`;

const Siparis = ({ siparis, malzemeIsim, setMalzemeIsim }) => {
  let history = useHistory();

  return (
    <Container>
      <div className="siparisOzet">
        <h3>Tebrikler! Pizza'nız yola çıktı</h3>
        <h5>Sipariş özeti </h5>
        {siparis &&
          siparis.map((item, index) => (
            <div key={index}>
              <div>Sipariş veren: {item.isim}</div>
              <div>Pizza Boyutu: {item.boyut}</div>
              {malzemeIsim !== "" && (
                <div>
                  Pizza Malzemeleri:
                  {malzemeIsim.map((item, index) => (
                    <SiparisOzetDiv key={index}>{item}</SiparisOzetDiv>
                  ))}{" "}
                </div>
              )}
              <div>Özel İstekler: {item.ozel}</div>
            </div>
          ))}
      </div>
      <ButtonDiv
        onClick={() => {
          history.push("/pizza");
          setMalzemeIsim("");
        }}
      >
        Tekrar Sipariş Ver
      </ButtonDiv>
    </Container>
  );
};

export default Siparis;
