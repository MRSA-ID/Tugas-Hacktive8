import React, { useState } from "react";
import { useDispatch } from "react-redux";

function InputList() {
  const dispatch = useDispatch();
  const [log, setLog] = useState("");
  const [isDisable, setisDisable] = useState(true);
  const handleChange = (e) => {
    setLog(e.target.value);
    if (e.target.value.length == 0) {
      handleIsValue(true);
    } else {
      handleIsValue(false);
    }
  };

  const handleIsValue = (value) => {
    setisDisable(value);
  };

  const handleClick = () => {
    dispatch({
      type: "ADD",
      payload: log,
    });
  };

  return (
    <div className=" w-5/6 p-2 ">
      {/* input text */}
      <input
        className="border px-4 rounded-sm w-1/2 mr-4"
        placeholder="New Task"
        onChange={handleChange}
      ></input>
      <button
        className={`bg-blue-500 text-white rounded-md px-2 py-1 font-bold ${
          isDisable === true ? "bg-blue-500 bg-opacity-40" : ""
        }`}
        onClick={handleClick}
        disabled={isDisable}
      >
        Save to Backlog
      </button>
    </div>
  );
}

export default InputList;
