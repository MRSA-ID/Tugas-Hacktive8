import React, { useState } from "react";
import Person from "./Person";
import UserList from "./UserList";
const TableListUser = ({users}) => {
    const personList = users.map( user => (
        <Person user={user}/>
    ))
    return(
        <table className="table auto w-full border-4 border-blue-400 ">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody >
                {personList}
            </tbody>
        </table>
    )
}

{/* <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.username}</td>
            <td>{u.email}</td>
        </tr> */}

export default TableListUser