import React, { useState } from "react";

function AccountCreation({ switchComponent }) {
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

    switchComponent("home");
  };

  return (
    <div>
      <button onClick={() => switchComponent("home")}>X</button>
      <div>
        <label>Account Name</label>
        <input
          type="text"
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
        />
      </div>
      <div>
        <label>Account Type</label>
        <div>
          <input
            type="checkbox"
            checked={isChecking}
            onChange={() => setIsChecking(!isChecking)}
          />
          Checking
          <input
            type="checkbox"
            checked={isSavings}
            onChange={() => setIsSavings(!isSavings)}
          />
          Savings
        </div>
      </div>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
}

export default AccountCreation;
