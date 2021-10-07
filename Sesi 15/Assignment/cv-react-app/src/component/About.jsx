import React from "react";
import img from "../img/rama.jpg";

function About() {
  return (
    <div className="w-full h-screen font-quicksand flex items-center  ">
      <div className="w-40 h-40 bg-purple-300 absolute -bottom-20 right-2 rounded-full filter blur-sm opacity-70 animate-blob animation-delay-4000"></div>
      <div className="w-96 h-96 bg-yellow-300 absolute -top-32 -right-32 rounded-full filter blur-sm opacity-70 animate-blob"></div>
      <div className="w-52 h-52 bg-pink-300 absolute top-14 left-0 rounded-full filter blur-sm opacity-70 animate-blob animation-delay-2000"></div>
      <div className="w-5/6 h-auto md:h-5/6  overflow-hidden rounded-xl border border-r-0 border-b-0 border-opacity-30 m-auto flex flex-col md:flex-row bg-white shadow-xl bg-opacity-10 backdrop-filter backdrop-blur-lg text-gray-800">
        <div className="flex-1">
          <img
            className="w-full object-cover h-64 sm:h-full"
            src={img}
            alt="Profile Picture Rama"
          />
        </div>
        <div className="p-5 flex-1 flex justify-center flex-col sm:p-6 relative bg-purple-500 bg-opacity-60 backdrop-filter backdrop-blur-lg text-white font-bold">
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg sm:text-base">
            I am a student who likes technology, especially websites development
            and apps, I really like website design, app design and social media
            design, precision and visualization and logic is what I like, I
            develop these skills, namely website design, backend and website
            development
          </p>
          <button className="text-left flex items-center w-max mt-5 text-white font-bold hover:bg-white hover:text-purple-400 px-3 py-1.5 rounded-full">
            <span className="mr-2 ">More about me</span>
            <span className="animate-xBounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
          <div className="absolute bottom-2 md:bottom-10 right-10  ">
            <span className=" transition-all duration-300 inline-block border-2 rounded-full p-2 bg-white shadow-lg bg-opacity-90 backdrop-filter backdrop-blur-lg mr-4 border-l-0 border-r-0 border-b-0 border-t-0 border-opacity-30 hover:bg-purple-700 hover:text-white text-purple-800 transform hover:scale-125">
              <svg
                className="w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
              </svg>
            </span>
            <span className="transition-all duration-300 inline-block border-2 rounded-full p-2 bg-white shadow-lg bg-opacity-90 backdrop-filter backdrop-blur-lg mr-4 border-l-0 border-r-0 border-b-0 border-t-0 border-opacity-30 transform text-pink-400 hover:text-white hover:scale-125 hover:bg-pink-400">
              <svg
                className="w-6 fill-current stroke-current stroke-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 1c6.064 0 11 4.936 11 11s-4.936 11-11 11C5.935 23 1 18.064 1 12S5.935 1 12 1m0-1C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
                <path d="M17 22.5a.5.5 0 0 1-.499-.469c-.457-7.313-3.938-14.886-9.313-20.261a.5.5 0 0 1 .707-.707c5.542 5.543 9.132 13.355 9.604 20.904a.5.5 0 0 1-.468.53c-.01.003-.021.003-.031.003z" />
                <path d="M1 11.063a.5.5 0 010-1c6.742 0 15.438-1.097 18.57-6.317a.5.5 0 01.858.514C17.055 9.882 8 11.063 1 11.063zM4.687 21.042a.5.5 0 01-.434-.748c4.227-7.397 12.931-9.756 18.905-7.769a.502.502 0 01.316.633.497.497 0 01-.633.314c-5.589-1.861-13.747.364-17.72 7.315a.496.496 0 01-.434.255z" />
              </svg>
            </span>
            <span className="transition-all duration-300 inline-block border-2 rounded-full p-2 bg-white shadow-lg bg-opacity-90 backdrop-filter backdrop-blur-lg border-l-0 border-r-0 border-b-0 border-t-0 border-opacity-30 transform text-blue-300 hover:text-white hover:scale-125 hover:bg-blue-300">
              <svg
                className="w-6 fill-current "
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
