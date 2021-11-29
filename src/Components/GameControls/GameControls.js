import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeBoard } from "../../redux/actions";
import "./GameControls.css";

const GameControls = () => {
  const [selectValue, setSelectValue] = useState(0);
  const [sizeBoardOptions, setsizeBoardOptions] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://demo1030918.mockable.io/")
      .then((res) => res.data)
      .then((data) => setsizeBoardOptions(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <h1>Please wait while data is loading?...</h1>;
  }

  return (
    <div className="wrap">
      <select
        onChange={(e) => setSelectValue(e.target.value)}
        defaultValue=""
        className="select"
      >
        <option value="" disabled>
          Pick mode
        </option>
        {Object.entries(sizeBoardOptions).map((item, i) => {
          return (
            <option value={item[1]["field"]} key={i}>
              {item[0]}
            </option>
          );
        })}
      </select>
      <button
        onClick={() => dispatch(changeBoard(selectValue))}
        disabled={!selectValue}
      >
        START
      </button>
    </div>
  );
};

export default GameControls;
