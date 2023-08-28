import React from "react";

function SelectAccount({ accountList }) {
  return (
    <div className="component">
      <div className="data">
        <label>Select Account:</label>
        <select>
          <option>Pick an account...</option>
          {accountList.map((account, index) => (
            <option key={index} value={account}>
              {account}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectAccount;
