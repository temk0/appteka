import React from "react";
import {Link, navigate} from "@reach/router";
import {getOrder} from "../../Services/OrderService";


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
                    <Link to="/" className="nav-link border-top text-uppercase  text-success">Items</Link>
                </li>
                <li className="list-inline-item">
                    <Link to="/add-item" className="nav-link border-top text-uppercase  text-success">Add Item</Link>
                </li>
                <li className="list-inline-item">


                    {/*bi bilo interesno ako moze od tuka direkno da se pishe kodot ?*/}


                    <a href="/ticket-page" className="nav-link border-top text-uppercase text-primary">Enter Order
                        Code</a>
                    <input
                        onKeyPress={event => event.key === "Enter" && getOrder(event.target.value)
                            .then(navigate(`/ticket-page/${event.target.value}`, {orderId: event.target.value}), window.location.reload())}
                        type="text" className="form-control text-info p-lg-1"/>
                </li>
                {/*<li className="list-inline-item">*/}
                {/*    <a href="#" className="nav-link border-top border-bottom text-uppercase text-primary">All Items</a>*/}
                {/*</li>*/}
            </ul>
        </div>
    )
}

export default SideBar