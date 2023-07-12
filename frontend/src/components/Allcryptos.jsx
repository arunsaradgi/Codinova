import React, { useEffect, useState } from "react";
import axios from "axios";
import CryptoCard from "./CryptoCard";

const Allcryptos = () => {
  const [crytos, setCryptos] = useState([]);
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://rest.coinapi.io/v1/exchanges/apikey-FDAB8705-CEAA-4A23-8A5B-6CC30B8D44D9/"
      )
      .then(function (response) {
        // console.log(response.data);
        let sortedcryptos = response.data.sort((a, b) => {
          return b.volume_1day_usd - a.volume_1day_usd;
        });
        setCryptos(sortedcryptos);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(
        "https://rest.coinapi.io/v1/exchanges/icons/32/apikey-FDAB8705-CEAA-4A23-8A5B-6CC30B8D44D9"
      )
      .then(function (response) {
        // console.log(response.data);
        setIcons(response.data);
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
        {crytos?.map((ele, index) => (
          <CryptoCard
            key={ele.exchange_id}
            icons={icons}
            ele={ele}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default Allcryptos;
