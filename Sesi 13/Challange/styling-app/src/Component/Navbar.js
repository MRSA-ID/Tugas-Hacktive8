import React from "react";
import { useHistory } from "react-router";
function Navbar(){
    let history = useHistory();
   
    return(
        <>
            <nav className="py-2 bg-light border-bottom">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link link-dark px-2 active" aria-current="page">Home</a>
                        </li>
                        <li className="nav-item"><a href="/" className="nav-link link-dark px-2">Features</a></li>
                        <li className="nav-item"><a href="/" className="nav-link link-dark px-2">FAQs</a></li>
                        <li className="nav-item"><a href="/" className="nav-link link-dark px-2">About</a></li>
                    </ul>
                    <ul className="nav ">
                        <li className="nav-item">
                        <button href="/" className="btn btn-danger px-2 fw-bold" onClick={() => history.push('/SignIn') }>Log Out</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar