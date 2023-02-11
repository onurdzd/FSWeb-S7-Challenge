import React, { useEffect, useState } from "react";
import axios from "axios";
import Header, { Container } from "./Header";
import styled, { css } from "styled-components";
import img2 from "../Img/siparis-orta.jpg";

const initialValue = {
  isim: "",
  boyut: "",
  özel: "",
};

const CheckBoxDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #b97777;
  border-radius: 1rem;
  border-bottom: 0px;

  ${(props) =>
    props.aa &&
    css`
      margin: 0 auto;
      width: 30%;
      padding: 1.5rem;
      border-radius: 1rem;
      font-weight: 600;
      font-size: 1.3rem;
    `}

  ${(props) =>
    props.error &&
    css`
      width: 70%;
      display: block;
      color: red;
      text-align: center;
      font-size: 1rem;
      margin: 0 auto;
      background-color: #ffffff9e;
      border-radius: 1rem;
    `}

  input {
    margin: 0 auto;
  }
`;

const BackgroundImg2 = styled.div`
  background-image: url(${img2});
  background-size: cover;
`;

const ButtonStyled = styled.button`
  background-color: #240f0fd9;
  color: aliceblue;
  width: 30%;
  margin: 0 auto;
`;

const FormDiv = styled.div`
  width: 50%;
  margin: 1rem auto;
  padding: 1rem;
  border-bottom: 2px solid black;
`;

const Form = () => {
  const [siparisIcerik, setSiparisIcerik] = useState(initialValue);
  const error = "İsim en az 2 karakter olmalıdır";
  const [siparis, setSiparis] = useState([]);
  const [buttonToggle, setButtonToggle] = useState();
  const [malzemeIsım, setMalzemeIsım] = useState();

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setSiparisIcerik({ ...siparisIcerik, [name]: checked ? checked : value });
    checked && setMalzemeIsım({ [checked]: name });
  };

  useEffect(() => {
    !siparisIcerik.isim || !siparisIcerik.boyut || !siparisIcerik.özel
      ? setButtonToggle(false)
      : setButtonToggle(true);
  }, [siparisIcerik]);

  const limitCheckBox = () => {
    let checkedCount = 0;
    document.querySelectorAll(".checkbox").forEach((item) => {
      if (item.checked) {
        checkedCount += 1;
      }
      if (checkedCount > 2) {
        alert("Max 2 seçenek seçebilirsin");
        item.checked = false;
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", {
        siparisIcerik,
      })
      .then((response) => {
        console.log(response.data.siparisIcerik);
        setSiparis([...siparis, response.data.siparisIcerik]);
        setSiparisIcerik("");
      })
      .catch((error) => {
        console.log(error, "Bağlantı Hatası");
      });
  };

  return (
    <Container>
      <Header></Header>
      Kendi Pizzanızı Yapın
      <BackgroundImg2>
        <fieldset>
          <form id="pizza-form" data-cy="form-submit" onSubmit={handleSubmit}>
            <FormDiv>
              <label>
                <h3>İsim</h3>
                <input
                  type="text"
                  id="name-input"
                  name="isim"
                  placeholder="İsim"
                  data-cy="name-input"
                  onChange={handleChange}
                ></input>
                {siparisIcerik.isim &&
                (siparisIcerik.isim !== "") &
                  (siparisIcerik.isim.length < 2) ? (
                  <CheckBoxDiv error>{error}</CheckBoxDiv>
                ) : null}
              </label>
            </FormDiv>
            <FormDiv>
              <label>
                <h3>Pizza Boyutunu Seç</h3>
                <select
                  id="size-dropdown"
                  data-cy="size-dropdown"
                  onChange={handleChange}
                  name="boyut"
                >
                  <option value="" disabled selected hidden>
                    Seçiniz
                  </option>
                  <option name="boyut" value="kucuk">
                    Kucuk
                  </option>
                  <option name="boyut" value="orta">
                    Orta
                  </option>
                  <option name="boyut" value="buyuk">
                    Buyuk
                  </option>
                  <option name="boyut" value="mega">
                    Mega Boy
                  </option>
                </select>
              </label>
            </FormDiv>
            <FormDiv>
              <h3>Malzemeler (Opsiyonel)</h3>
              <CheckBoxDiv>
                <CheckBoxDiv aa>
                  <label>
                    Mısır
                    <input
                      type={"checkbox"}
                      name="Mısır"
                      value="Mısır"
                      className="checkbox"
                      onChange={handleChange}
                      onClick={limitCheckBox}
                      data-cy="checkbox-misir"
                    ></input>
                  </label>
                </CheckBoxDiv>
                <CheckBoxDiv aa>
                  <label>
                    Sucuk
                    <input
                      type={"checkbox"}
                      name="Sucuk"
                      value="Sucuk"
                      className="checkbox"
                      onChange={handleChange}
                      onClick={limitCheckBox}
                      data-cy="checkbox-sucuk"
                    ></input>
                  </label>
                </CheckBoxDiv>
                <CheckBoxDiv aa>
                  <label>
                    Mantar
                    <input
                      type={"checkbox"}
                      name="Mantar"
                      value="Mantar"
                      className="checkbox"
                      onChange={handleChange}
                      onClick={limitCheckBox}
                      data-cy="checkbox-mantar"
                    ></input>
                  </label>
                </CheckBoxDiv>
                <CheckBoxDiv aa>
                  <label>
                    Sosis
                    <input
                      type={"checkbox"}
                      name="Sosis"
                      value="Sosis"
                      className="checkbox"
                      onChange={handleChange}
                      onClick={limitCheckBox}
                      data-cy="checkbox-sosis"
                    ></input>
                  </label>{" "}
                </CheckBoxDiv>
              </CheckBoxDiv>
            </FormDiv>
            <FormDiv>
              <label>
                <h3>Özel İstekler </h3>
                <input
                  type="text"
                  id="special-text"
                  name="özel"
                  onChange={handleChange}
                  placeholder="Talebinizi iletebilirsiniz"
                  data-cy="özel"
                ></input>
              </label>
            </FormDiv>

            <ButtonStyled
              id="order-button"
              type="submit"
              data-cy="siparis-button"
              disabled={!buttonToggle}
            >
              Siparişlere Ekle
            </ButtonStyled>

            {siparis.length > 0 && (
              <div>
                <h3>Tebrikler! Pizza'nız yola çıktı</h3>
                <h5>Sipariş özeti: </h5>
                {siparis.map((item, index) => (
                  <p key={index}>
                    <div>Sipariş veren: {item.isim}</div>
                    <div>Pizza Boyutu: {item.boyut}</div>
                    <div>Pizza Malzemeleri: {malzemeIsım.true}</div>
                    <div>Özel İstekler: {item.özel}</div>
                  </p>
                ))}
              </div>
            )}
          </form>
        </fieldset>
      </BackgroundImg2>
    </Container>
  );
};

export default Form;
