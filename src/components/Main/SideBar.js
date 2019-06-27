import React from "react";
import {Link, navigate} from "@reach/router";
import {getOrder} from "../../Services/OrderService";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function SideBar() {

    // const handleOrderSearch = () => event => {
    //     if (event.key === "Enter")
    //         getOrder(event.target.value).then(navigate(`ticket-page/${event.target.value}`, {orderId: event.target.value}));
    //         console.log(event.target.value);
    //
    // };

    return (
        <div className="d-inline-block float-left text-info  text-center p-0 bg-light">
            <ul className="list-group bg-transparent">
                <li className="list-inline-item">
                    <Link to="/" className="nav-link border-top text-uppercase  text-success">Items </Link>
                </li>
                <li className="list-inline-item">
                    <Link to="/add-item" className="nav-link border-top text-uppercase  text-success">Add Item <FontAwesomeIcon icon={faPlus}/></Link>
                </li>
                <li className="list-inline-item">
                    <Link to="/register" className="nav-link border-top text-uppercase  text-dark">Register </Link>
                </li>
                <li className="list-inline-item">


                    <a href="/ticket-page" className="nav-link border-top text-uppercase text-primary">Orders</a>
                    <input
                        onKeyPress={event => event.key === "Enter" && getOrder(event.target.value)
                            .then(navigate(`/ticket-page/${event.target.value}`, {orderId: event.target.value}), window.location.reload())}
                        type="text" className="form-control text-center text-info p-lg-1" placeholder="Order code" style={{borderRadius:"12px"}}/>
                </li>
            </ul>
        </div>
    )
}

export default SideBar