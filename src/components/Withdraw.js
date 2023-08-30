import React from "react";
import SelectAccount from "./SelectAccount";
import CurrencyInput from "react-currency-input-field";

function Withdraw({ switchComponent, accountList }) {
  return (
    <div className="component">
      <button className="backButton" onClick={() => switchComponent("home")}>
        ⇦
      </button>
      <div className="data">
        <div>
          <SelectAccount accountList={accountList} />
        </div>
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

export default Withdraw;
