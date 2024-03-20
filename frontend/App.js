import React, { useState, useEffect } from "react";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

const App = () => {
  const mode = localStorage.getItem("dark-mode");
  const [coinData, setCoinData] = useState([]);
  const [geceModu, setGeceModu] = useState(mode ? JSON.parse(mode) : false);
  const [userName, setUserName] = useState(
    JSON.parse(localStorage.getItem("user-name"))
  );

  useEffect(() => {
    //  
    //
    //
    axios
      .get( 
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then((res) => setCoinData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {

  });

  useEffect(() =>{
    localStorage.setItem("dark-mode", JSON.stringify (geceModu));
  }, [geceModu]);

  useEffect(() =>{
    localStorage.setItem("user-name", JSON.stringify(userName));
  }, [userName  ]);

  return (
    <div className={geceModu ? "dark-mode App" : "App"}>
      <Navbar geceModu={geceModu} 
      setGeceModu={setGeceModu} 
      userName={userName}
      setUserName={setUserName}
      />
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;
