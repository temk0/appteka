import React, {useState} from "react"
import {Link, navigate} from "@reach/router";

// this header will contain search bar, cart and user section if its needed
// for now it has hardcoded elements
function Header(props) {

    const [searchQuery, setSearchQuery] = useState('');
    const cartItems = props.cartItems;

    const handleChange = event => {
        setSearchQuery(event.target.value);

    };

    const handleSearch =()=>{
        props.search(searchQuery);
        navigate("/");
    };

    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light col-12">
            <Link className="navbar-brand col-2" to="/">AppTeka</Link>

            <div className="collapse navbar-collapse col-10">

                <div className="form-inline my-2 my-lg-0 col-8">
                    <input onChange={handleChange} className="form-control mr-1 col-8" type="text" placeholder="Search"/>
                    <button className="btn btn-info my-2 my-sm-0" onClick={handleSearch}>Search</button>
                </div>

                        {cartItems.size === 0 ? <button onClick={()=> navigate("/cart") } className="btn btn-outline-success col-lg-1">Cart</button> :  <button onClick={()=> navigate("/cart")} className="btn btn-success col-lg-1">Cart ({cartItems.size})</button>}

            </div>



        </nav>

    );
}

export default Header