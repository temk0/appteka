import React from "react";
import {Link} from "@reach/router";


function SideBar() {
    return (
        <div className="d-inline-block col-2 pt-5 float-left text-info  text-center p-0">
            <ul className="list-group bg-light ">
                <li className="list-inline-item">
                    <Link to="/" className="nav-link border-top text-uppercase text-primary">Home</Link>
                </li>
                <li className="list-inline-item">
                    <Link to="/add-item" className="nav-link border-top text-uppercase text-primary">Add Item</Link>
                </li>
                <li className="list-inline-item">
                    <a href="#" className="nav-link border-top text-uppercase text-primary">On Stock</a>
                </li>
                <li className="list-inline-item">
                    <a href="#" className="nav-link border-top border-bottom text-uppercase text-primary">All Items</a>
                </li>
            </ul>
        </div>
    )
}

export default SideBar