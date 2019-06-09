import React from "react"

// this header will contain search bar, cart and user section if its needed
// for now it has hardcoded elements
function Header() {
    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light col-12">
            <a className="navbar-brand col-2" href="#">AppTeka</a>

            <div className="collapse navbar-collapse col-10">

                <form className="form-inline my-2 my-lg-0 col-8">
                    <input className="form-control mr-1 col-8" type="search" placeholder="Search"/>
                    <button className="btn btn-info my-2 my-sm-0">Search</button>
                </form>
                <ul className="navbar-nav mr-auto nav">
                    <li className="nav-item">
                        <a href="#" className=" text-primary glyphicon glyphicon-search nav-link">Cart</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link text-primary" href="#">User</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-primary" href="#">Sign In</a>
                    </li>


                </ul>
            </div>



        </nav>

    );
}

export default Header