import React, { useEffect, useState } from "react";
import axios from "axios";
import CryptoCard from "./CryptoCard";
import CardList from "./CardList";
const Allcryptos = () => {
  const [coins, setCoins] = useState([]);
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4500/crypto")
      .then(function (response) {
        // console.log(response.data.cryptos);

        setCoins(response.data.cryptos);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:4500/crypto/icons")
      .then(function (response) {
        console.log(response.data.icons);
        setIcons(response.data.icons);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div style={{ width: "75%", margin: "auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px",
          }}
        >
          <h3>EXCHANGES</h3>
          <h3>24H TRADE VOLUME</h3>
        </div>
        <hr />

        <CardList coins={coins} icons={icons} />
      </div>
    </>
  );
};

export default Allcryptos;
