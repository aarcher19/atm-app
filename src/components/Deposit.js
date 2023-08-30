import React from "react";
import "./Component.css";
import SelectAccount from "./SelectAccount";
import CurrencyInput from "react-currency-input-field";

function Deposit({ switchComponent, accountList }) {
  return (
    <div className="component">
      <button className="backButton" onClick={() => switchComponent("home")}>
        ⇦
      </button>
      <div className="data">
        <SelectAccount accountList={accountList} />
        <div>
          <label>Enter Ammount</label>
          <CurrencyInput
            id="input-field"
            name="deposit-input"
            placeholder="$1,000"
            decimalScale={2}
            decimalsLimit={2}
            prefix="$"
          />
        </div>
        <button className="confirm">Confirm</button>
      </div>
    </div>
  );
}

export default Deposit;
