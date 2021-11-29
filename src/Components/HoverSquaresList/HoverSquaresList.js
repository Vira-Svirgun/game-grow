import React from "react";
import { useSelector } from "react-redux";
import "./HoverSquaresList.css";

const HoverSquaresList = () => {
  let listHovers = useSelector((prevState) => prevState.square.hovers);

  return (
    <div className="container">
      <h1>Hover squares</h1>

      {listHovers.map((el, i) => {
        return (
          <div className="hover-square" key={i}>
            <p>
              row {el["row"]} col {el["col"]}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default HoverSquaresList;
