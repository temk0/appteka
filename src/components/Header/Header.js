import React from "react"
import {Link, navigate} from "@reach/router";

// this header will contain search bar, cart and user section if its needed
// for now it has hardcoded elements
function Header(props) {

    const cartItems = props.cartItems;
    console.log("Cart Items in header ", props.cartItems);

    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light col-12">
            <Link className="navbar-brand col-2" to="/">AppTeka</Link>

            <div className="collapse navbar-collapse col-10">

                <form className="form-inline my-2 my-lg-0 col-8">
                    <input className="form-control mr-1 col-8" type="search" placeholder="Search"/>
                    <button className="btn btn-info my-2 my-sm-0">Search</button>
                </form>
                <ul className="navbar-nav mr-auto nav">
                    <li className="nav-item">

                        {cartItems.size === 0 ? <button onClick={()=> navigate("/cart") } className="btn btn-link text-primary glyphicon glyphicon-search nav-link">Cart</button> :  <button onClick={()=> navigate("/cart")} className="btn btn-link text-primary glyphicon glyphicon-search nav-link">Cart({cartItems.size})</button>}
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