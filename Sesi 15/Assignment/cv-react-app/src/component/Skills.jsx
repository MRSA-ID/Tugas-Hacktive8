import React from "react";

function Skills() {
  return (
    <div className="w-full h-screen font-quicksand flex items-center justify-center ">
      <div className="w-72 h-72 bg-purple-300 absolute bottom-0 -left-32 rounded-full filter blur-sm opacity-70 animate-blob "></div>
      <div className="w-96 h-96 bg-yellow-300 absolute -top-32 -right-32 rounded-full filter blur-sm opacity-70 animate-blob animation-delay-4000"></div>
      <div className="w-44 h-44 bg-pink-300 absolute top-20 left-24 rounded-full filter blur-sm opacity-70 animate-blob animation-delay-2000"></div>
      <div className="w-32 h-32 bg-blue-300 absolute bottom-4 right-24 rounded-full filter blur-sm opacity-70 animate-blob animation-delay-5000"></div>
      <div className="flex flex-1 px-10 flex-col max-w-7xl min-h-screen justify-around items-center">
        <div className="rounded-full text-white w-max px-6 py-2 bg-yellow-300">
          <h1 className="text-3xl font-medium text-center ">Skills</h1>
        </div>
        <div className="p-4 grid grid-rows-4 grid-flow-col gap-4 text-center">
          <div className="p-8 w-full border border-r-0 border-b-0 border-opacity-30 bg-blue-500 bg-opacity-30 backdrop-filter backdrop-blur-lg flex items-center text-blue-400 rounded-2xl col-span-2 row-span-2 justify-center hover:text-white hover:bg-blue-500 transform transition-all hover:-translate-x-10 duration-300 shadow-md">
            <h1 className="text-xl font-bold ">Programming</h1>
          </div>
          <div className="p-8 w-full  border border-r-0 border-b-0 border-opacity-30 bg-indigo-500 bg-opacity-30 backdrop-filter backdrop-blur-lg flex items-center text-indigo-400 rounded-2xl hover:text-white hover:bg-indigo-500 transform transition-all hover:-translate-x-10 duration-300 shadow-md">
            <h1 className="text-xl font-bold ">Networking</h1>
          </div>
          <div className="p-8 w-full border border-r-0 border-b-0 border-opacity-30 bg-yellow-500 bg-opacity-30 backdrop-filter backdrop-blur-lg flex items-center text-yellow-400 rounded-2xl col-span-3 justify-center hover:text-white hover:bg-yellow-500 transform transition-all hover:translate-y-2 duration-300 shadow-md">
            <h1 className="text-xl font-bold ">Design</h1>
          </div>
          <div className="p-8 w-full border border-r-0 border-b-0 border-opacity-30 bg-green-500 bg-opacity-30 backdrop-filter backdrop-blur-lg flex items-center text-green-400 rounded-2xl hover:text-white hover:bg-green-500 transform transition-all hover:scale-110 duration-300 shadow-md">
            <h1 className="text-xl font-bold ">Public Speaking</h1>
          </div>
          <div className="p-8 w-full border border-r-0 border-b-0 border-opacity-30 bg-purple-500 bg-opacity-30 backdrop-filter backdrop-blur-lg flex items-center text-purple-400 rounded-2xl row-span-3 hover:text-white hover:bg-purple-500 transform transition-all hover:-translate-y-10 duration-300 shadow-md">
            <h1 className="text-xl font-bold ">TroubleShooting</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
