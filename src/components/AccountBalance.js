import React from "react";
import SelectAccount from "./SelectAccount";

function Balance({ switchComponent, accountList }) {
  return (
    <div className="component">
      <button className="backButton" onClick={() => switchComponent("home")}>
        ⇦
      </button>
      <div className="data">
        <div>
          <SelectAccount accountList={accountList} />
        </div>
        <div>{/* <DisplayBalance /> */}</div>
        <button className="confirm">Get Balance</button>
      </div>
    </div>
  );
}

export default Balance;
