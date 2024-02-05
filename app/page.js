"use client" //afin d'utiliser les hooks
import { useState, useEffect } from "react";
import Coins from "./components/Coins";
import SearchCoins from "./components/SearchCoins";

export default function Home() {
  const [coins, setCoins] = useState ([]);

  useEffect (() =>{
    const getCoins = async () =>{
      const response = await fetch('api/coins');
      const coins = await response.json();
      setCoins(coins.data.coins);
      console.log(coins)
    }
    getCoins();
  }, []);

  return (
   <div className="text-center">
    <h1 className="text-7xl mb-5 text-center text-blue-600 shadow-lg">Crypto coins</h1>
   
    <SearchCoins getSearchResults={(results) => setCoins(results)} />

    <Coins coins={coins}/>
   </div>
  );
}
