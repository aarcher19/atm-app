import React from "react";

function Balance({ switchComponent }) {
  return (
    <div>
      <button onClick={() => switchComponent("home")}>X</button>
      <div>
        <label>Select Account</label>
        <input />
      </div>
      <div>{/* <DisplayBalance /> */}</div>
    </div>
  );
}

export default Balance;
