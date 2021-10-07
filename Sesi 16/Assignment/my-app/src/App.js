import React, { useState } from "react";
import Backlog from "./components/Backlog";
import InputList from "./components/InputList";
import InProgress from "./components/InProgress";
import Evaluate from "./components/Evaluate";
import Done from "./components/Done";

function App() {
  return (
    <>
      <div className="px-4">
        <div className="w-full h-max text-4xl font-bold border-b border-black py-4">
          Kanban Board
        </div>
        <div className="flex flex-col min-h-screen ">
          <div className="flex w-full py-4">
            <InputList />
          </div>
          <div className="py-4 grid-cols-4 gap-4 grid place-items-start w-full min-h-screen">
            <Backlog />
            <InProgress />
            <Evaluate />
            <Done />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
