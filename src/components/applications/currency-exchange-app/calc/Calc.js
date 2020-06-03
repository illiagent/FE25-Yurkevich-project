import React, { useState, useEffect } from "react";
import "./Calc.css";

const Calc = (props) => {
  const [result, setResult] = useState("");
  const [inputValueHave, setInputValueHave] = useState("");
  const [currencyTypeHave, setCurrencyTypeHave] = useState("");
  const [currencyTypeNeed, setCurrencyTypeNeed] = useState("");
  const [resultInUSD, setResultInUSD] = useState("");
  const [resultInBYN, setResultInBYN] = useState("");
  const [flag, setFlag] = useState();
  const { rate } = props;

  const SetValueHave = async (e) => {
    setInputValueHave(e.target.value);
  };
  const SetTypeOfCurrencyHave = (e) => {
    setCurrencyTypeHave(e.target.value);
  };

  const ExchangeStart = () => {
    if (currencyTypeHave === "$") {
      setResultInBYN(inputValueHave * rate);
      setFlag(true);
    } else if (currencyTypeHave === "BYN") {
      setResultInUSD(inputValueHave / rate);
      setFlag(false);
    }
    currencyTypeHave === "$" ? setCurrencyTypeNeed("BYN") : setCurrencyTypeNeed("$");
  };
  const Reset = (e) => {
    console.log(inputValueHave);
    setInputValueHave("");
    setResultInBYN("");
    setResultInUSD("");
    setCurrencyTypeHave("");
  };

  return (
    <div className="calculator">
      <h3> обмен валют </h3>
      <input className="input" type="number" onChange={SetValueHave} value={inputValueHave}></input>
      <select onChange={SetTypeOfCurrencyHave} value={currencyTypeHave}>
        <option></option>
        <option>$</option>
        <option>BYN</option>
      </select>
      <br />

      <button type="button" onClick={ExchangeStart}>
        convert
      </button>
      <br />
      <br />
      <button type="button" onClick={Reset}>
        reset
      </button>
      <h3>
        {flag ? resultInBYN : resultInUSD}
        {currencyTypeNeed}
      </h3>
    </div>
  );
};

export default Calc;
