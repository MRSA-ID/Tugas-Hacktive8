import React from 'react';

function Footer()
{
    return(
        <footer className="flex w-full p-20 text-gray-500 font-roboto bg-black">
            <div className="w-11/12 h-full  p-10 text-2xl  m-auto flex flex-col justify-center">
                Questions? Call 007-803-321-2130
                <div className="flex flex-row gap-44 w-full leading-loose">
                    {/* Row 1 */}
                    <div>
                        <br />
                        <ul>
                            <li>FAQ</li>
                            <li>Investor Relations</li>
                            <li>Privacy</li>
                            <li>Speed Test</li>
                        </ul>
                    </div>
                    {/* Row 2 */}
                    <div>
                        <br />
                        <ul>
                            <li>Help Center</li>
                            <li>Jobs</li>
                            <li>Cookie Preferences</li>
                            <li>Legal Notices</li>
                        </ul>  
                    </div>
                    {/* Row 3 */}
                    <div>
                        <br />
                        <ul>
                            <li>Account</li>
                            <li>Ways to Watch</li>
                            <li>Corporate Information</li>
                            <li>Only on Netflix</li>
                        </ul> 
                    </div>
                    {/* Row 4 */}
                    <div>
                        <br />
                        <ul>
                            <li>Media Center</li>
                            <li>Terms of Use</li>
                            <li>Contact Us</li>
                        </ul> 
                    </div>
                </div>
                <br />
                <div className="container border border-gray-200 w-64 p-5 flex items-center rounded-md">
                    <span><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg></span>
                    <select className="text-xl outline-none w-auto h-auto bg-transparent">
                      <option>English</option>
                      <option>Bahasa Indonesia</option>
                    </select>
                </div>
                <p className="mt-8">Netflix Indonesia</p>
            </div>
        </footer>
    );
}

export default Footer