import React from "react";

function TvComponent(){
    return(
    <div className="container max-w-full flex border-b-8 bg-black text-white h-auto border-gray-800">
        <div className="container flex flex-col justify-center pl-16  ">
            <h1 className="text-7xl font-bold">Enjoy on your TV.</h1>
            <h2 className="text-4xl pt-5 font-medium ">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
        </div>
        <div className="container p-10 ">
          <div className="container relative pl-24">
            <div className="relative z-20">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"/>
            </div>
            <div className="absolute top-24 left-44 w-4/5 z-10">
              <video autoPlay playsInline muted loop>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
    </div>
    )
}

export default TvComponent