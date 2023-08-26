import React, { useState } from "react";
import AccountCreation from "./components/AccountCreation";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import TransferFunds from "./components/Transfer";
import Balance from "./components/AccountBalance";
import "./cssFiles/App.css";

function App() {
  const [activeComponent, setActiveComponent] = useState("home");

  const switchComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  let componentToRender;

  switch (activeComponent) {
    case "AccountCreation":
      componentToRender = <AccountCreation switchComponent={switchComponent} />;
      break;
    case "Deposit":
      componentToRender = <Deposit switchComponent={switchComponent} />;
      break;
    case "Withdraw":
      componentToRender = <Withdraw switchComponent={switchComponent} />;
      break;
    case "TransferFunds":
      componentToRender = <TransferFunds switchComponent={switchComponent} />;
      break;
    case "Balance":
      componentToRender = <Balance switchComponent={switchComponent} />;
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
        <div className="component">{componentToRender}</div>
      </div>
    </div>
  );
}

export default App;
