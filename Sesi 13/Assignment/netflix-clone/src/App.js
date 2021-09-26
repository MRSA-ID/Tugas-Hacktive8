import React from 'react';
import logo from './logo.svg';
// import './App.css';
import TvComponent from './component/TvComponent';
import DownloadComponent from './component/DownloadComponent';
import WatchComponent from './component/WatchComponent';
import Anak from './component/Anak';
import Tanya from './component/Tanya';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <div className="container max-w-full bg-hero-pattern h-screen bg-no-repeat bg-auto flex flex-col justify-center items-center border-b-8 border-gray-800">
        <div className="container max-w-full h-10 m-auto">
            <div className="px-12 flex items-center justify-between w-full h-full">
              <span className="inline-block h-40 w-40 ">
                <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="-153.6 -69.1855 1331.2 415.113"><path fill="#d81f26" d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594 274.58 0 276.742V0h41.08l56.212 157.021V0h43.511zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482zm237.284-58.104h-44.862V242.15c-14.594 0-29.188 0-43.239.539V43.242h-44.862V0H463.22zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242V0h-42.43zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0z"/></svg>
              </span>
                <div className="flex w-auto h-full text-white">
                  <div className="container border border-gray-200 w-auto p-2 flex items-center rounded-md">
                    <span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg></span>
                    <select className="text-base outline-none w-auto h-auto bg-transparent">
                      <option>English</option>
                      <option>Bahasa Indonesia</option>
                    </select>
                  </div>
                  <button className="ml-12 px-4 text-lg font-thin bg-red-650 text-white rounded-md ">
                    <span>Signin</span>
                  </button>
                </div>
            </div>
        </div>
        <div className="container text-white h-auto text-center flex flex-col p-36 items-center">
          <div className="container max-w-3xl h-2/4 flex flex-col items-center justify-center px-0 mb-10">
            <div className="pb-6">
              <h1 className="text-6xl font-bold">Unlimited movies, TV shows, and more.</h1>
              <h2 className="text-3xl font-semibold pt-8">Watch anywhere. Cancel anytime.</h2>
            </div>
            <form className="container pt-2">
              <h3 className="text-xl font-semibold">Ready to watch? Enter your email to create or restart your membership.</h3>
              <div className="px-0 h-16 flex mt-6">
                <input className="p-4 w-full border border-gray-300 focus:outline-none text-black text-xl" placeholder="Email address"/>
                <button className=" w-2/5 bg-red-650 flex justify-center items-center border-l-2 border-gray-700 hover:bg-red-500  px-4 ">
                  <span className="text-3xl font-normal">Get Started</span>
                  <span className="pl-1 pt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <TvComponent/>
      <DownloadComponent/>
      <WatchComponent/>
      <Anak/>
      <Tanya/>
      <Footer/>
    </>
  );
}

export default App;
