import React from "react";
import Badrun from "../img/Badrun 1.svg";

function Home() {
  return (
    <div className=" w-full h-full py-10 flex mx-auto font-quicksand relative ">
      <div className="w-4/5 md:container md:w-full md:h-auto flex-col flex mx-auto justify-center items-center md:px-10">
        <div className="flex-col flex rounded-xl md:p-10 md:flex-row bg-white shadow-xl bg-opacity-50 backdrop-filter backdrop-blur">
          <div className="px-6 py-6 text-left md:px-8 md:py-8">
            <h1 className="text-md md:text-4xl font-bold mb-2">
              Muhammad Ramadhan Sangisda Alam
            </h1>
            <h4 className="md:text-xl font-medium ">Front-End Developer</h4>
            <p className=" text-sm leading-relaxed mt-8">
              I am a student who was born in Bekasi on December 16, 2000 and
              currently I'm studying at BSI University, majoring in Information
              Technology and aspires to be a reliable programmer and have an
              enthusiastic curiosity, whether it's something new or something
              that has been in the works for a long time, I'm very happy to have
              an aesthetic appearance and think creatively and love to provide a
              solution, always be consistent in learning because I believe
              consistency is the key to success and improve skills.
            </p>
          </div>
          <div className="hidden flex-shrink-0 md:w-1/2 md:h-full relative md:inline-block">
            <div className="absolute right-96 inset-y-14">
              <div className="w-64 h-64 bg-purple-300 absolute top-20 -left-4 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
              <div className="w-64 h-64 bg-yellow-300 absolute -top-4 -right-28 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="w-64 h-64 bg-pink-300 absolute bottom-14 left-20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>
            <div className=" w-full absolute  ">
              <img className=" h-full" src={Badrun} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
