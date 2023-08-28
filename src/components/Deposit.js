import React from "react";
import "./Component.css";
import SelectAccount from "./SelectAccount";

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
          <input type="number" />
        </div>
        <button className="confirm">Confirm</button>
      </div>
    </div>
  );
}

export default Deposit;
