import React from "react";
import SelectAccount from "./SelectAccount";

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
          <input />
        </div>
        <button className="confirm">Confirm</button>
      </div>
    </div>
  );
}

export default Withdraw;
