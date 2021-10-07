import { React, useState } from "react";
import { DataImg } from "./DataImg";

function Awards() {
  return (
    <div className="w-full min-h-screen  flex items-center justify-center font-quicksand">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl font-bold md:text-5xl text-purple-500 ">
            My Certification
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 md:justify-evenly">
          {DataImg.map((img, index) => {
            return (
              <div key={index} className="p-4 sm:w-1/2 lg:w-2/5">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-72 md:h-48 w-full object-fill"
                    src={img.image}
                    alt={img.nama}
                  />
                  <div className="p-6 hover:bg-indigo-700 h-full hover:text-white transition duration-300 ease-in">
                    <span className="text-base text-indigo-300 font-bold mb-3">
                      {img.company}
                    </span>
                    <h3 className=" text-2xl font-bold  mb-1">{img.title}</h3>
                    <p className="leading-relaxed mb-3">{img.detail}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Awards;
