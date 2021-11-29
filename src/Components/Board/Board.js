import React from "react";
import { addHover, removeHover } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import "./Board.css";

const Board = () => {
  const dispatch = useDispatch();

  const row = useRef(null);

  const handleHover = (e) => {
    if (e.target.style.backgroundColor === "blue") {
      e.target.style.backgroundColor = "white";
      dispatch(removeHover({ row: row.current, col: e.target.id }));
    } else {
      e.target.style.backgroundColor = "blue";
      dispatch(addHover({ row: row.current, col: e.target.id }));
    }
  };

  function getRow(e) {
    row.current = e.currentTarget.id;
  }

  let valueToCreateBoard = useSelector((state) => state.sizeBoard.mode);

  const buildField = () => {
    const rows = [];
    const squares = [];
    for (let i = 0; i < valueToCreateBoard; i++) {
      squares.push(
        <div
          className="square"
          key={i}
          id={i + 1}
          onMouseEnter={(e) => handleHover(e)}
        ></div>
      );
    }
    for (let k = 0; k < valueToCreateBoard; k++) {
      rows.push(
        <div className="row" id={k + 1} key={k} onMouseEnter={(e) => getRow(e)}>
          {squares}
        </div>
      );
    }

    return rows;
  };

  return <div className="board">{buildField()}</div>;
};

export default Board;
