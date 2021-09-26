import React from "react";
function Header(){
    return(
        <>
            <header className="py-3 mb-4 border-bottom">
                <div className="container d-flex flex-wrap justify-content-center">
                    <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                        <span className="fs-4">My Third React</span>
                    </a>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-8">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>
                </div>
            </header>
        </>
    )
}

export default Header