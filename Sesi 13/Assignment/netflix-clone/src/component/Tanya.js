import React from "react";



function Tanya()
{
    return(
        <div className="flex w-full justify-center text-white font-roboto bg-black border-b-8 border-gray-800 py-20">
            <div className=" w-9/12 p-10">
                <h1 className="text-center text-6xl mb-5"><b>Frequently Asked Questions</b></h1>
                <br />
                <ul className="text-3xl text">
                    <li className="bg-gray-550 w-full p-6">
                        <button type="button" className="inline-flex w-full" >
                            <span><b>What is Netflix?</b></span><span>+</span>

                        </button>
                        
                        <div className="hidden bg-gray-550">
                            <br />
                            Netflix is a streaming service that offers a wide variety of <br />
                            award-winning TV shows, movies, anime, documentaries, <br />
                            and more on thousands of internet-connected devices. <br />

                            You can watch as much as you want, whenever you want <br />
                            without a single commercial – all for one low monthly price. <br />
                            There's always something new to discover and new TV <br />
                            shows and movies are added every week! <br />
                        </div>
                    </li>
                    <br />
                    <li className="bg-gray-550 w-full p-6">
                        <button>
                            <span><b>How much does Netflix cost?</b></span>
                        </button>
                        <div className="hidden bg-gray-550">
                        Watch Netflix on your smartphone, tablet, Smart TV, laptop,  <br />
                        or streaming device, all for one fixed monthly fee. Plans  <br />
                        range from IDR54,000 to IDR186,000 a month. No extra  <br />
                        costs, no contracts. <br />
                        </div>
                    </li>
                    <br />
                    <li className="bg-gray-550 w-full p-6">
                        <button>
                            <span><b>Where can i watch?</b></span>
                        </button>
                        <div className="hidden bg-gray-550">
                        Watch anywhere, anytime, on an unlimited number of <br />
                        devices. Sign in with your Netflix account to watch instantly <br />
                        on the web at netflix.com from your personal computer or on <br />
                        any internet-connected device that offers the Netflix app, <br />
                        including smart TVs, smartphones, tablets, streaming media <br />
                        players and game consoles. <br />

                        You can also download your favorite shows with the iOS, <br />
                        Android, or Windows 10 app. Use downloads to watch while <br />
                        you're on the go and without an internet connection. Take <br />
                        Netflix with you anywhere.<br />
                        </div>
                    </li>
                    <br />
                    <li className="bg-gray-550 w-full p-6">
                        <button>
                            <span><b>How do i cancel?</b></span>
                        </button>
                        <div className="hidden bg-gray-550">
                        Netflix is flexible. There are no pesky contracts and no <br />
                        commitments. You can easily cancel your account online in <br />
                        two clicks. There are no cancellation fees – start or stop your <br />
                        account anytime. <br />
                        </div>
                    </li>
                    <br />
                    <li className="bg-gray-550 w-full p-6">
                        <button>
                            <span><b>What can i watch on Netflix?</b></span>
                        </button>
                        <div className="hidden bg-gray-550">
                        Netflix has an extensive library of feature films, <br />
                        documentaries, TV shows, anime, award-winning Netflix  <br />
                        originals, and more. Watch as much as you want, anytime <br />
                        you want. <br />
                        </div>
                    </li>
                    <br />
                    <li className="bg-gray-550 w-full p-6">
                        <button>
                            <span><b>Is Netflix good for kids?</b></span>
                        </button>
                        <div className="hidden bg-gray-550">
                        The Netflix Kids experience is included in your membership <br />
                        to give parents control while kids enjoy family-friendly TV <br />
                        shows and movies in their own space. <br />

                        Kids profiles come with PIN-protected parental controls that <br />
                        let you restrict the maturity rating of content kids can watch <br />
                        and block specific titles you don’t want kids to see. <br />
                        </div>
                    </li>
                </ul>
                <br />
                <h1 className="text-center text-3xl mt-10">
                Ready to watch? Enter your email to create or restart your membership.
                </h1>
                <form className="container pt-2">
                    <div className="px-10 h-16 flex mt-6">
                        <input className="p-4 w-full border border-gray-300 focus:outline-none text-black text-xl" placeholder="Email address"/>
                        <button className=" w-2/5 bg-red-650 filter brightness-150 flex justify-center items-center border-l-2 border-gray-700 hover:bg-red-600  px-4 ">
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
    );
}

export default Tanya