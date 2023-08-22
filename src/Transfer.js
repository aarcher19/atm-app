import React from "react";

function TransferFunds({ switchComponent }) {
  return (
    <div>
      <button onClick={() => switchComponent("home")}>X</button>
      <div>
        <label>Account From</label>
        <input />
      </div>
      <div>
        <label>Account To</label>
        <input />
      </div>
      <div>
        <label>Amount</label>
        <input />
      </div>
      <button>Confirm</button>
    </div>
  );
}

export default TransferFunds;
