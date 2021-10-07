import React from "react";
import { useSelector } from "react-redux";
import Button from "./Button";

function InProgress() {
  const state = useSelector((state) => state);

  return (
    <div className="border p-2  w-full">
      <div className="bg-yellow-300 py-2 px-4 mb-3 rounded-md text-gray-800">
        <h3 className="font-bold text-lg">In Progress</h3>
      </div>
      {state.inProgress.map((list, i) => {
        return (
          <div className="border p-4 ">
            <h3 className="font-bold mb-4">{list}</h3>
            <Button key={i} index={i} name="Evaluate" />
          </div>
        );
      })}
    </div>
  );
}

export default InProgress;
