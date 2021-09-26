import React from "react";
import { useHistory } from "react-router";

function Home(){
    let history = useHistory();
    return(
    <div className="container h-full flex justify-center">
        <div className="container bg-gray-200 w-4/5 h-full p-32 flex flex-col">
        <h1 className="text-5xl font-bold pb-10">why do we need test</h1>
        <p className="text-xl pb-10">to guarantee our quality, And to show the people that we also care about it and wish to give something that already proven, at least by ourself</p>
        <button className="bg-blue-700 w-20 text-white p-2 rounded-md" type="button" onClick={() => history.push('/UserList')} role="button" >Users List</button>
        </div>
    </div>
    )
}

export default Home