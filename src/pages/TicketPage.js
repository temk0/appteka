import React, {useState, useEffect} from 'react';
import {deleteOrder, getAllOrders, getOrder} from "../Services/OrderService";
import {Link, navigate} from "@reach/router";
import {withToastManager} from "react-toast-notifications";


function TicketPage(props) {

    const {toastManager} = props;
    const [orders, setOrders] = useState(null);
    const [searchedOrder, setSearchedOrder] = useState(null);
    const [orderId, setOrderId] = useState(null);
    const [invalid, setInvalid] = useState(false);

    useEffect(() => {

        if (props.orderId !== undefined) {
            setOrderId(props.orderId);
            getOrder(props.orderId).then(res => {
                if (res.data.length === 0)
                    setInvalid(true);
                else
                    setSearchedOrder(res.data);

            })
        } else
            getAllOrders().then(res => setOrders(res.data));
    }, []);


    const handleOrderDetail = id => {
        navigate(`/ticket-page/${id}`);
        window.location.reload();
    };

    const orderDelete = id => {
        deleteOrder(id).then( res=> {
            navigate("/ticket-page");
            setInterval(function () {
                window.location.reload();
            },2000);
            toastManager.add(`Order ${id} successfully deleted`, {appearance:"error", autoDismiss:true});
        });
    };

    return (
        <div>

            {orders && <h1>Orders</h1>}
            {searchedOrder && orderId && <h1> Order Number: {orderId}</h1>}
            {invalid && <h1>Invalid Order</h1>}
            {orders && orders.map(item => <div className="card mt-3 text-center">
                <div className="card-body">
                    <h5 className="card-title">Order Number : {item.id}</h5>
                    <p className="card-text">To check this order, click the button bellow.</p>
                    <button onClick={() => handleOrderDetail(item.id)} className="btn btn-primary">Details</button>
                    <button onClick={() => orderDelete(item.id)} className="btn ml-2 btn-danger">Delete</button>
                </div>
            </div>)}


            {searchedOrder && searchedOrder.map(object => <div className="card mt-4">
                <div className="card-body">
                    <h5 className="card-title">{object.item.name}</h5>
                    <p className="card-text">{object.item.description}</p>
                    <p>On Recipe: {object.onRecipe ? <b>Yes</b> : <b>No</b>}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Quantity: {object.quantity} </li>
                    <li className="list-group-item">{object.onRecipe ?
                        <span>Recipe Price: {object.item.recipePrice}</span>
                        : <span>Regular Price: {object.item.price}</span>}</li>
                    <li className="list-group-item">On Stock Left: {object.item.stock}</li>
                </ul>
            </div>)}
            {searchedOrder && <div className="text-center">
                <button className="btn btn-danger mt-3" onClick={() => orderDelete(orderId)}> Delete Order</button>
            </div>}

            {invalid &&  <div className="text-center">
                <p>Please search for another order, or check the available orders in the tickets page</p>
                <Link to="/">Back to Home</Link>
            </div>}

        </div>
    );

}

export default withToastManager(TicketPage)