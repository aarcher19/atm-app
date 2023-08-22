import React from "react";

function AccountCreation({ switchComponent }) {
  //   const [accountName, setAccountName] = useState("");
  //   const [accountBalance, setAccountBalance] = useState(0);
  //   const [holderName, setHolderName] = useState("");

  return (
    <div>
      <button onClick={() => switchComponent("home")}>X</button>
      <div>
        <label>Account Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Account Type</label>
        <div>
          <input type="checkbox" />
          Checking
          <input type="checkbox" />
          Savings
        </div>
      </div>
      <button>Confirm</button>
    </div>
  );
}

export default AccountCreation;
