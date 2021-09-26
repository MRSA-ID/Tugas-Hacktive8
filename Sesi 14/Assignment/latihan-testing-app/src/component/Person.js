import React from "react";

function Person({user}){
    return(
        <tr>
            <td className="border-2 border-blue-400">{user.id}</td>
            <td className="border-2 border-blue-400">{user.name}</td>
            <td className="border-2 border-blue-400">{user.username}</td>
            <td className="border-2 border-blue-400">{user.email}</td>
        </tr>
    )
}
export default Person
