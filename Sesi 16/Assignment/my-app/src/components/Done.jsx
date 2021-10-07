import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Done() {
  const state = useSelector((state) => state);
  return (
    <div className="border w-full p-2">
      <div className="bg-green-300 py-2 px-4 mb-3 rounded-md text-gray-800">
        <h3 className="font-bold text-lg">Done</h3>
      </div>
      {state.done.map((list, i) => {
        return (
          <div className="border p-4" key={i}>
            <h3 className="font-bold mb-4">{list}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Done;
