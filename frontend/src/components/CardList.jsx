import React, { useState } from "react";
import CryptoCard from "./CryptoCard";
import { Button } from "@chakra-ui/react";

const CardList = ({ filteredCoins, coins, icons }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const coinsPerPage = 10;
  var totalPages;
  if (filteredCoins.length != 0) {
    totalPages = Math.ceil(filteredCoins.length / coinsPerPage);
  } else {
    totalPages = Math.ceil(coins.length / coinsPerPage);
  }
  const indexOfLastCard = currentPage * coinsPerPage;
  const indexOfFirstCard = indexOfLastCard - coinsPerPage;
  var currentcoins;
  if (filteredCoins.length != 0) {
    currentcoins = filteredCoins.slice(indexOfFirstCard, indexOfLastCard);
  } else {
    currentcoins = coins.slice(indexOfFirstCard, indexOfLastCard);
  }

  let number = indexOfFirstCard;
  const handlePrevious = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      {currentcoins.map((ele, index) => (
        <CryptoCard key={index} number={number++} ele={ele} icons={icons} />
      ))}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "50px",
        }}
      >
        <Button
          onClick={handlePrevious}
          isDisabled={currentPage === 1}
          colorScheme="teal"
          size="sm"
          mr={"20px"}
        >
          Previos
        </Button>

        {currentPage}

        <Button
          onClick={handleNext}
          isDisabled={currentPage === totalPages}
          colorScheme="teal"
          size="sm"
          ml={"20px"}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default CardList;
