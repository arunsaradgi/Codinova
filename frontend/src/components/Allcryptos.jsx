import React, { useEffect, useState } from "react";
import axios from "axios";
import CardList from "./CardList";
import { Select } from "@chakra-ui/react";
const Allcryptos = () => {
  const [coins, setCoins] = useState([]);
  const [icons, setIcons] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  // const [fill, setFill] = useState(true);
  const [filteredCoins, setFilteredCoins] = useState([]);

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
        // console.log(response.data.icons);
        setIcons(response.data.icons);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleFilter = (event) => {
    const value = event.target.value;
    let [s, e] = value.split("-").map(Number);
    console.log(s, e);
    setStart(s);
    setEnd(e);
    // setFill(!fill);
  };

  useEffect(() => {
    if (start > 600) {
      let arr = coins?.filter((ele) =>
        ele.volume_1day_usd / 1000000000 > start ? ele : ""
      );
      console.log(arr);
      setFilteredCoins(arr);
    } else {
      let arr = coins?.filter((ele) =>
        ele.volume_1day_usd / 1000000000 > start &&
        ele.volume_1day_usd / 1000000000 <= end
          ? ele
          : ""
      );
      console.log(arr);
      setFilteredCoins(arr);
    }
  }, [start, end]);
  return (
    <>
      <Select
        margin={"auto"}
        width={"300px"}
        variant={"filled"}
        placeholder="Filter By volume"
        onChange={handleFilter}
      >
        <option value="0-100">0-100 billion</option>
        <option value="101-200">101-200 billion</option>
        <option value="201-300">201-300 billion</option>
        <option value="301-500">301-500 billion</option>
        <option value="501-600">501-600 billion</option>
        <option value="601-max">601-max billion</option>
      </Select>

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

        <CardList filteredCoins={filteredCoins} coins={coins} icons={icons} />
      </div>
    </>
  );
};

export default Allcryptos;
