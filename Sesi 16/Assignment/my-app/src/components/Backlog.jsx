import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";

function Backlog() {
  const state = useSelector((state) => state);

  return (
    <div className="border  w-full p-2">
      <div className="bg-gray-300 py-2 px-4 mb-3 rounded-md text-gray-800">
        <h3 className="font-bold text-lg">Backlog</h3>
      </div>
      {state.globalLog.map((list, i) => {
        return (
          <div className="border p-4 ">
            <h3 className="font-bold mb-4">{list}</h3>
            <Button key={i} index={i} name="Take" />
          </div>
        );
      })}
    </div>
  );
}

export default Backlog;
