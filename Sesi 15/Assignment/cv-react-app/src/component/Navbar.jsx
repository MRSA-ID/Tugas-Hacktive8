import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Transition } from "@headlessui/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  let history = useHistory();

  console.log(location.pathname);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white md:w-5/6 md:mx-auto bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl z-10 md:mt-5 sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center w-full justify-between">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-Lobster text-purple-400">Mrsa</h1>
            </div>
            <div className="hidden md:block font-quicksand text-purple-500">
              <ul className="flex ml-10 items-baseline space-x-4">
                <li>
                  <button
                    className={` transition-color transition-transform transform hover:scale-110 px-3 py-2 text-sm hover:bg-purple-500 rounded-2xl hover:text-white font-bold ${
                      location.pathname === "/home"
                        ? "text-white bg-purple-500 scale-110"
                        : ""
                    }`}
                    onClick={() => history.push("/home")}
                  >
                    Home
                  </button>
                </li>
                &nbsp;
                <li>
                  <button
                    className={` transition-color transition-transform transform hover:scale-110 px-3 py-2 text-sm hover:bg-purple-500 rounded-2xl hover:text-white font-bold ${
                      location.pathname === "/about"
                        ? "text-white bg-purple-500 scale-110"
                        : ""
                    }`}
                    onClick={() => history.push("/about")}
                  >
                    About
                  </button>
                </li>
                &nbsp;
                <li>
                  <button
                    className={` transition-color transition-transform transform hover:scale-110 px-3 py-2 text-sm hover:bg-purple-500 rounded-2xl hover:text-white font-bold ${
                      location.pathname === "/experience"
                        ? "text-white bg-purple-500 scale-110"
                        : ""
                    }`}
                    onClick={() => history.push("/experience")}
                  >
                    Experience
                  </button>
                </li>
                &nbsp;
                <li>
                  <button
                    className={` transition-color transition-transform transform hover:scale-110 px-3 py-2 text-sm hover:bg-purple-500 rounded-2xl hover:text-white font-bold ${
                      location.pathname === "/skills"
                        ? "text-white bg-purple-500 scale-110"
                        : ""
                    }`}
                    onClick={() => history.push("/skills")}
                  >
                    Skills
                  </button>
                </li>
                &nbsp;
                <li>
                  <button
                    className={` transition-color transition-transform transform hover:scale-110 px-3 py-2 text-sm hover:bg-purple-500 rounded-2xl hover:text-white font-bold ${
                      location.pathname === "/interest"
                        ? "text-white bg-purple-500 scale-110"
                        : ""
                    }`}
                    onClick={() => history.push("/interest")}
                  >
                    Interest
                  </button>
                </li>
                &nbsp;
                <li>
                  <button
                    className={` transition-color transition-transform transform hover:scale-110 px-3 py-2 text-sm hover:bg-purple-500 rounded-2xl hover:text-white font-bold ${
                      location.pathname === "/certificate"
                        ? "text-white bg-purple-500 scale-110"
                        : ""
                    }`}
                    onClick={() => history.push("/certificate")}
                  >
                    Certificate
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-500 hover:font-bold  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-500 focus:ring-white"
              onClick={handleClick}
              type="button"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <ul
              ref={ref}
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-purple-500"
            >
              <li>
                <button
                  className={`hover:bg-purple-500 hover:text-white transition-colors duration-300  px-3 py-2 rounded-md text-base font-medium w-full ${
                    location.pathname === "/home"
                      ? "text-white bg-purple-500"
                      : ""
                  }`}
                  onClick={() => history.push("/home")}
                >
                  Home
                </button>
              </li>
              &nbsp;
              <li>
                <button
                  className={`hover:bg-purple-500 hover:text-white transition-colors duration-300  px-3 py-2 rounded-md text-base font-medium w-full ${
                    location.pathname === "/about"
                      ? "text-white bg-purple-500"
                      : ""
                  }`}
                  onClick={() => history.push("/about")}
                >
                  About
                </button>
              </li>
              &nbsp;
              <li>
                <button
                  className={`hover:bg-purple-500 hover:text-white transition-colors duration-300  px-3 py-2 rounded-md text-base font-medium w-full ${
                    location.pathname === "/experience"
                      ? "text-white bg-purple-500"
                      : ""
                  }`}
                  onClick={() => history.push("/experience")}
                >
                  Experience
                </button>
              </li>
              &nbsp;
              <li>
                <button
                  className={`hover:bg-purple-500 hover:text-white transition-colors duration-300  px-3 py-2 rounded-md text-base font-medium w-full ${
                    location.pathname === "/skills"
                      ? "text-white bg-purple-500"
                      : ""
                  }`}
                  onClick={() => history.push("/skills")}
                >
                  Skills
                </button>
              </li>
              &nbsp;
              <li>
                <button
                  className={`hover:bg-purple-500 hover:text-white transition-colors duration-300  px-3 py-2 rounded-md text-base font-medium w-full ${
                    location.pathname === "/interest"
                      ? "text-white bg-purple-500"
                      : ""
                  }`}
                  onClick={() => history.push("/interest")}
                >
                  Interest
                </button>
              </li>
              &nbsp;
              <li>
                <button
                  className={`hover:bg-purple-500 hover:text-white transition-colors duration-300  px-3 py-2 rounded-md text-base font-medium w-full ${
                    location.pathname === "/certificate"
                      ? "text-white bg-purple-500"
                      : ""
                  }`}
                  onClick={() => history.push("/certificate")}
                >
                  Certificate
                </button>
              </li>
            </ul>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;
