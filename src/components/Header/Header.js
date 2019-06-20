import React, {useState} from "react"
import {Link, navigate} from "@reach/router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/gotowe-logo-getlogo-eu-apteka.png";

// this header will contain search bar, cart and user section if its needed
// for now it has hardcoded elements
function Header(props) {

    const [searchQuery, setSearchQuery] = useState('');
    const cartItems = props.cartItems;

    const handleChange = event => {
        setSearchQuery(event.target.value);

    };

    const handleSearch = () => {
        props.search(searchQuery);
        navigate("/");
    };

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="col-lg-2">
                <Link className="navbar-brand" to="/"><img width={155} height={60} src={logo} alt="logo"/></Link>
            </div>
            <div className="collapse navbar-collapse">
                <div className="form-inline col-lg-10" style={{display: "flex", justifyContent: "center"}}>
                    <input onChange={handleChange} className="form-control mr-1 col-8" style={{borderRadius:"15px"}} type="text"
                           placeholder="Search"/>
                    <button className="btn btn-primary" style={{borderRadius: "15px"}}
                            onClick={handleSearch}><FontAwesomeIcon icon={faSearch}/></button>
                </div>
                <div className="form-inline col-lg-2" style={{display: "flex", justifyContent: "flex-end"}}>
                    {cartItems.size === 0 ?
                        <button onClick={() => navigate("/cart")} className="btn btn-outline-success btn-block">
                            <FontAwesomeIcon icon={faShoppingCart}/></button> :
                        <button onClick={() => navigate("/cart")} className="btn btn-success"><FontAwesomeIcon
                            icon={faShoppingCart}/> ({cartItems.size})</button>}
                </div>
            </div>
        </nav>

    );
}

export default Header