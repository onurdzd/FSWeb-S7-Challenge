import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "./Header";
import styled, { css } from "styled-components";
import img2 from "../Img/siparis-orta.jpg";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

const initialValue = {
  isim: "",
  boyut: "",
  ozel: "",
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
  background-color: #318f36;
  color: aliceblue;
  width: 30%;
  margin: 0 auto;

  &:disabled {
    background-color: grey;
  }
`;

const FormDiv = styled.div`
  width: 50%;
  margin: 0.5rem auto;
  padding: 0.5rem;
  border-bottom: 2px solid black;
`;

const Form = ({ siparis, setSiparis, setMalzemeIsim, malzemeIsim }) => {
  const [siparisIcerik, setSiparisIcerik] = useState(initialValue);
  const [formError, setFormError] = useState(initialValue);

  const [buttonToggle, setButtonToggle] = useState(true);

  let history = useHistory();

  let userSchema = Yup.object({
    isim: Yup.string()
      .required("Bu alan gereklidir")
      .min(2, "En az 2 karakter olmalı"),
    boyut: Yup.string().required("Boyut seçilmeli"),
    ozel: Yup.string()
      .required("İstek yazılmalı")
      .min(3, "En az 3 karakter olmalı"),
  });

  const errorCheck = (name, value) => {
    Yup.reach(userSchema, name)
      .validate(value)
      .then(() => {
        setFormError({
          ...formError,
          [name]: "",
        });
      })
      .catch((error) => {
        setFormError({
          ...formError,
          [name]: error.errors[0],
        });
      });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSiparisIcerik({
      ...siparisIcerik,
      [name]: type === "checkbox" ? checked : value,
    });
    checked && setMalzemeIsim([...malzemeIsim, name]);
    type !== "checkbox" && errorCheck(name, value);
  };

  useEffect(() => {
    userSchema.isValid(siparisIcerik).then((valid) => setButtonToggle(!valid));
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
  console.log(malzemeIsim);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", {
        siparisIcerik,
      })
      .then((response) => {
        console.log(response.data.siparisIcerik);
        setSiparis([...siparis, response.data.siparisIcerik]);
        history.push("/siparis");
        setSiparisIcerik("");
      })
      .catch((error) => {
        console.log(error, "Bağlantı Hatası");
      });
  };

  return (
    <Container>
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
                {formError.isim && <div>{formError.isim}</div>}
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
                      type="checkbox"
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
                      type="checkbox"
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
                      type="checkbox"
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
                      type="checkbox"
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
                  name="ozel"
                  onChange={handleChange}
                  placeholder="Talebinizi iletebilirsiniz"
                  data-cy="ozel"
                ></input>
                {formError.ozel && <div>{formError.ozel}</div>}
              </label>
            </FormDiv>

            <ButtonStyled
              id="order-button"
              data-cy="siparis-button"
              disabled={buttonToggle}
              type="submit"
            >
              Siparişlere Ekle
            </ButtonStyled>
          </form>
        </fieldset>
      </BackgroundImg2>
    </Container>
  );
};

export default Form;
