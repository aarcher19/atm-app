import React, { useState } from "react";
import AccountCreation from "./components/AccountCreation";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import TransferFunds from "./components/Transfer";
import Balance from "./components/AccountBalance";
import "./App.css";

function App() {
  const [activeComponent, setActiveComponent] = useState("home");
  const [accountList, setAccountList] = useState([]);

  const addAccount = (newAccount) => {
    setAccountList([...accountList, newAccount]);
  };

  const switchComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  let componentToRender;

  switch (activeComponent) {
    case "AccountCreation":
      componentToRender = (
        <AccountCreation
          switchComponent={switchComponent}
          addAccount={addAccount}
        />
      );
      break;
    case "Deposit":
      componentToRender = (
        <Deposit
          switchComponent={switchComponent}
          addAccount={addAccount}
          accountList={accountList}
        />
      );
      break;
    case "Withdraw":
      componentToRender = (
        <Withdraw
          switchComponent={switchComponent}
          addAccount={addAccount}
          accountList={accountList}
        />
      );
      break;
    case "TransferFunds":
      componentToRender = (
        <TransferFunds
          switchComponent={switchComponent}
          addAccount={addAccount}
          accountList={accountList}
        />
      );
      break;
    case "Balance":
      componentToRender = (
        <Balance switchComponent={switchComponent} accountList={accountList} />
      );
      break;
    default:
      componentToRender = (
        <div className="homeComponent">
          <button onClick={() => switchComponent("AccountCreation")}>
            Create Account
          </button>
          <button onClick={() => switchComponent("Deposit")}>Deposit</button>
          <button onClick={() => switchComponent("Withdraw")}>Withdraw</button>
          <button onClick={() => switchComponent("TransferFunds")}>
            Transfer Funds
          </button>
          <button onClick={() => switchComponent("Balance")}>
            Check Balance
          </button>
        </div>
      );
  }
  return (
    <div className="App">
      <header>
        <h1>Welcome to Archer Banking</h1>
      </header>
      <div className="container">
        <div className="componentContainer">{componentToRender}</div>
      </div>
    </div>
  );
}

export default App;
