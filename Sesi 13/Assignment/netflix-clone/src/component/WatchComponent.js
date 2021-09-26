import React from "react";

function WatchComponent(){
    return(
    <div className="container max-w-full flex border-b-8 bg-black text-white h-auto border-gray-800">
        <div className="container flex flex-col justify-center pl-16">
            <h1 className="text-6xl font-bold">Watch everywhere.</h1>
            <h2 className="text-4xl pt-5 font-medium ">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
        </div>
        <div className="container p-10 ">
          <div className="container relative">
            <div className="relative z-20">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-id.png"/>
            </div>
            <div className="absolute top-16 lg:left-28 lg:w-3/6 md:left-24 md:4/6 z-10 ">
              <video autoPlay playsInline muted loop>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-id.m4v" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
    </div>
    )
}

export default WatchComponent