import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import {stocks} from "./stocks";
import {getStockDetails} from "./stocksHelper";

function App() {

  const [selectedUserDetails, setSelectedUserDetails] = useState();
  const [appStocks, setAppStocks] = useState(stocks);

  function getStock (e) {
    let value = getStockDetails(e.target.value, appStocks);
    value && setSelectedUserDetails(value);
  }

  function addStock (e) {
    let newStock = {};
    let found = false;
    let name = e.target.querySelector(".stockName").value;
    let ltp = e.target.querySelector(".ltp").value;
    let lcp = e.target.querySelector(".lcp").value;

    appStocks.forEach(function(stock) {
      if(stock.name === name)
          found = true;
    });

    if(name && ltp && lcp && !found) {
      newStock.name = name;
      newStock.ltp = ltp;
      newStock.lcp = lcp;
      setAppStocks([...appStocks, newStock]);
      alert("Stock Added Successfully");
    } else {
      alert("Informaton not sufficient");
    }
  }

  return (
    <div className="App">
      <form onSubmit={addStock}>
        <label>Select a Stock : </label>
        <select name="stocks" onChange={getStock}>
          {/* {appStocks.forEach(function(stock) {
            return<option value={stock.name}>stock.name</option>
          })}; */}
          <option value={appStocks[0].name}>{appStocks[0].name}</option>
          <option value={appStocks[1].name}>{appStocks[1].name}</option>
          <option value={appStocks[2].name}>{appStocks[2].name}</option>
        </select>
        {selectedUserDetails && <div className="info">
          <label>Name: {selectedUserDetails.name}</label>
          <label>LTP: {selectedUserDetails.ltp}</label>
          <label>LCP: {selectedUserDetails.lcp}</label>
        </div>}
        <div className="addStock">
          Add stock
          <label>Enter stock name</label>
          <input className="stockName"></input>
          <label>Enter LTP</label>
          <input className="ltp"></input>
          <label>Enter LCP</label>
          <input className="lcp"></input>
          <button type="submit">Add Stock</button>
        </div>
      </form>
    </div>
  );
}

export default App;
