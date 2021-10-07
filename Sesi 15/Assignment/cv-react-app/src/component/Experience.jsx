import React from "react";

function Experience() {
  return (
    <div className="w-full h-screen font-quicksand flex items-center">
      <div className="w-64 h-64 bg-purple-300 absolute -bottom-40 right-24 rounded-full filter blur-sm opacity-70"></div>
      <div className="w-96 h-96 bg-yellow-300 absolute -top-32 -right-32 rounded-full filter blur-sm opacity-70"></div>
      <div className="w-96 h-96 bg-pink-300 absolute top-0 -left-20 rounded-full filter blur-sm opacity-70"></div>
      <div className="w-4/6 h-auto md:h-5/6 md:w-5/6 overflow-hidden rounded-xl border border-r-0 border-b-0 border-opacity-30 m-auto flex flex-col-reverse md:flex-row bg-white shadow-xl bg-opacity-10 backdrop-filter backdrop-blur-lg text-gray-800">
        <div className="flex-1 flex flex-col justify-evenly items-center">
          <div className=" w-11/12 p-2">
            <h1 className="text-lg font-bold text-purple-500">
              Work Experience
            </h1>
            <div class=" group border border-r-0 border-b-0 border-opacity-30 bg-purple-500 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl p-4 mt-2 text-sm leading-snug text-white font-bold">
              <h2 className="text-md">
                IT Support <span>(Internship)</span>
              </h2>
              <h5 className="mt-1">
                PT.JASAMARGA (PERSERO) TBK | January 2018 - april 2018
              </h5>
              <ul className="list-disc list-inside mt-2">
                <li>TroubleShooting</li>
                <li>Network Configuration</li>
              </ul>
            </div>
          </div>
          <div className=" w-11/12 p-2 ">
            <h1 className="text-lg font-bold text-purple-500">
              Organizations Experience
            </h1>
            <div class="border border-r-0 border-b-0 border-opacity-30 bg-purple-500 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl p-4 mt-2 text-sm leading-snug font-bold text-white ">
              <h2 className="text-md  ">
                Volunteer
                <span> (Devisi Social Media)</span>
              </h2>
              <h5 className=" mt-1">UBSI Jatiwaringin | 2019 - 2020</h5>
              <ul className="list-disc list-inside mt-2">
                <li>Design Content Media</li>
                <li>CopyWriter</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-5 flex-1 flex justify-center flex-col sm:p-6 relative bg-pink-400 shadow-xl bg-opacity-80 backdrop-filter backdrop-blur-lg text-white font-bold">
          <h1 className="text-2xl md:text-5xl  mb-4">Experience</h1>
          <p className="text-sm sm:text-base md:text-lg">
            some of the experiences I've gone through in internships and also
            organizations and get some new skills new experiences improve soft
            skills ranging from communication, problem solving and collaboration
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
