import React, {useState} from "react"
import {Link, navigate} from "@reach/router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/gotowe-logo-getlogo-eu-apteka.png";



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
                <div className="form-inline col-lg-10  " style={{display: "flex", justifyContent: "center"}}>
                    <div className="border border-right-0 rounded-pill col-lg-8" style={{display: "flex"}}>
                        <input onChange={handleChange} className="m-8 col-lg-11 border-0 bg-transparent"  type="text"
                               placeholder="Search"/>
                        <button className="btn btn-primary rounded-pill col-lg-2" style={{justifyContent: "flex-end"}}
                                onClick={handleSearch}><FontAwesomeIcon icon={faSearch}/></button>
                    </div>
                </div>
                <div className="form-inline col-lg-2 " style={{display: "flex", justifyContent: "flex-end"}}>
                    {cartItems.size === 0 ?
                        <button onClick={() => navigate("/cart")} className="btn btn-outline-success  btn-block">
                            <FontAwesomeIcon icon={faShoppingCart}/></button> :
                        <button onClick={() => navigate("/cart")} className="btn btn-success btn-block ">
                            <FontAwesomeIcon icon={faShoppingCart}/> ({cartItems.size})</button>}
                </div>
            </div>
        </nav>

    );
}

export default Header