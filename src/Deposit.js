import React from "react";

function Deposit({ switchComponent }) {
  return (
    <div>
      <button onClick={() => switchComponent("home")}>X</button>
      <div>
        <label>Select Account</label>
        <input />
      </div>
      <div>
        <label>Enter Ammount</label>
        <input />
      </div>
      <button>Confirm</button>
    </div>
  );
}

export default Deposit;
