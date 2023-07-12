import React, { useEffect, useState } from "react";

const CryptoCard = ({ ele, index, icons }) => {
  const [presentIcon, setPresentIcons] = useState({});

  useEffect(() => {
    icons.forEach((item) =>
      item.exchange_id === ele.exchange_id ? setPresentIcons(item) : ""
    );
  }, [ele]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div>{index + 1} </div>
          <div
            style={{ margin: "auto", marginLeft: "20px", marginRight: "20px" }}
          >
            {presentIcon ? (
              <img width={"20px"} src={presentIcon.url} alt="" />
            ) : (
              ""
            )}
          </div>
          <div>{ele.name}</div>
        </div>
        <div>$ {(ele.volume_1day_usd / 1000000000).toFixed(2)} billion</div>
      </div>
      <hr />
    </div>
  );
};

export default CryptoCard;
