import React from "react";
import { useEffect ,useState } from "react";
import TableListUser from "./TableListUser";
import { useHistory } from "react-router";

function UserList(){
    const [user, setUser] = useState(null);
    let history = useHistory();
    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                return res.json()
            })
            .then(data => setUser(data));
    }, []);
    console.log(user)
    return(
        <div className="container flex flex-col items-left">
            <div className="w-1/2 p-5">
                <button className="bg-green-600 text-white p-2 mb-5 rounded-lg" onClick={() => history.push('/')} role="button">Back to Home</button>
                {user && <TableListUser users={user}/>}
            </div>
        </div>
    )
}

export default UserList