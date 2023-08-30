import React, { useState } from "react";
import "./Component.css";

function AccountCreation({ switchComponent, addAccount }) {
  const [accountName, setAccountName] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [isSavings, setIsSavings] = useState(false);
  const [accounts, setAccounts] = useState([]);

  const handleConfirm = () => {
    const account = {
      name: accountName,
      type: isChecking ? "Checking" : isSavings ? "Savings" : "",
      balance: 0,
    };

    setAccounts([...accounts, account]);

    addAccount(accountName);
    setAccountName("");

    switchComponent("home");
  };

  return (
    <div className="component">
      <button className="backButton" onClick={() => switchComponent("home")}>
        ⇦
      </button>
      <div className="data">
        <div>
          <label>Account Name</label>
          <input
            type="text"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            placeholder="Ex. Checking 01..."
          />
        </div>
        <div>
          <label>Account Type</label>
          <div className="balanceDataContainer">
            <div className="balanceData">
              <h1>Checking</h1>
              <input
                type="checkbox"
                checked={isChecking}
                onChange={() => setIsChecking(!isChecking)}
              />
            </div>
            <div className="balanceData">
              <h1>Savings</h1>
              <input
                type="checkbox"
                checked={isSavings}
                onChange={() => setIsSavings(!isSavings)}
              />
            </div>
          </div>
        </div>
        <button className="confirm" onClick={handleConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default AccountCreation;
