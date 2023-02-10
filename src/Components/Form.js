import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialValue = {
  // isim: string,
  // boyut: string,
  // malzeme1: bool,
  // malzeme2: bool,
  // özel: string,
};

const Form = () => {
  const [data, setData] = useState(initialValue);
  const error = "İsim en az 2 karakter olmalıdır";
  const [siparis, setSiparis] = useState([]);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setData({ ...data, [name]: checked ? checked : value });
  };

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

  console.log(data);

  return (
    <fieldset>
      <form id="pizza-form">
        <label>
          İsim
          <input
            id="name-input"
            name="name-input"
            placeholder="isim"
            onChange={handleChange}
          ></input>
          {(data !== "") & (data.length < 2) ? <div>{error}</div> : null}
        </label>
        <div>
          <label>
            Pizza Boyutunu Seç
            <select id="size-dropdown" onChange={handleChange}>
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
        </div>
        <div>
          Malzemeler :
          <label>
            Mısır
            <input
              type={"checkbox"}
              name="Mısır"
              value="Mısır"
              className="checkbox"
              onChange={handleChange}
              onClick={limitCheckBox}
            ></input>
          </label>
          <label>
            Sucuk
            <input
              type={"checkbox"}
              name="Sucuk"
              value="Sucuk"
              className="checkbox"
              onChange={handleChange}
              onClick={limitCheckBox}
            ></input>
          </label>
          <label>
            Mantar
            <input
              type={"checkbox"}
              name="Mantar"
              value="Mantar"
              className="checkbox"
              onChange={handleChange}
              onClick={limitCheckBox}
            ></input>
          </label>
          <label>
            Sosis
            <input
              type={"checkbox"}
              name="Sosis"
              value="Sosis"
              className="checkbox"
              onChange={handleChange}
              onClick={limitCheckBox}
            ></input>
          </label>
        </div>
        <div>
          <label>
            Özel İstekler :
            <input
              type="text"
              id="special-text"
              name="özel"
              onChange={handleChange}
            ></input>
          </label>
        </div>

        <button id="order-button" type="submit">
          Siparişlere Ekle
        </button>

        <div>
          <Link to={"/"}>
            <button>Ana Sayfa</button>
          </Link>
        </div>
      </form>
    </fieldset>
  );
};

export default Form;
