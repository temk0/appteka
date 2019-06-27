import React, {useState, useEffect} from 'react';
import './cartPage.css';
import {createOrder} from "../Services/OrderService";
import {withToastManager} from "react-toast-notifications";
import {navigate} from "@reach/router";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import drugImage from "../assets/GettyImages-508498022-600x414.jpg";

function CartPage(props) {


    const [items, setItems] = useState([]);
    const {toastManager} = props;
    let [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const nova = [...props.cartItems].map(item => ({...item, quantity: 1, onRecipe: false}));
        setItems(nova);

        nova.forEach(item => {
            setTotalPrice(totalPrice += item.quantity * item.price);

        })

    }, []);

    const removeFromList = id => {
        props.deleteFromCart(id);
        let newList = [...items];
        newList = newList.filter(item =>
            item.id !== id
        );
        setItems(newList);

        totalCost(newList)

    };

    const BuyItems = () => {
        const Request = {
            items: items.map(item => {
                return {itemId: item.id, quantity: item.quantity, onRecipe: item.onRecipe, totalPrice: totalPrice};
            })
        };
        createOrder(Request)
            .then(res => {
                console.log(res.data);
                navigate("/");

                setInterval(function () {
                    window.location.reload();
                },2000);
                toastManager.add(`Your order number is: ${res.data.id}`, {appearance: 'success', autoDismiss: false});
            })
            .catch(err => toastManager.add("Something went wrong, try again later", {
                appearance: 'error',
                autoDismiss: true
            }))
    };

    const handleChange = (id, name, target) => event => {
        const newItems = items.map(item => {
            console.log(item);
            if (item.id === id) {
                return {...item, [name]: event.currentTarget[target]}
            } else
                return item;
        });
        setItems(newItems);

        totalCost(newItems)
    };

    const totalCost = (array) => {
        let price = 0;
        array.forEach(item => {
            if (item.onRecipe) {
                price += item.quantity * item.recipePrice;
            } else {
                price += item.quantity * item.price;
            }
        });
        setTotalPrice(price);
    };


    return (
        <div className="card">
            <div className="card-header bg-info text-light">

                <b>Your Cart</b>

            </div>
            <div className="card-body">

                {items.length > 0 ? items.map((item, key) =>
                    <div className="">
                        <div className="row" key={key}>
                            <div className="col-12 col-sm-12 col-md-2 text-center">
                                <img className="img-responsive" src={drugImage} alt="drug"
                                     width="120" height="80"/>
                            </div>
                            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                                <h4 className="product-name"><strong>{item.name}</strong></h4>
                                <h4>

                                    <small>{item.description}</small>

                                </h4>
                            </div>
                            <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                                <div className="col-3 col-sm-3 col-md-6 text-md-right">
                                    <h6>
                                        <strong>{item.onRecipe ? item.recipePrice : item.price} <span
                                        className="text-muted">{item.onRecipe ? "Recipe Price" : "Regular Price"}</span></strong>
                                    </h6>

                                    {item.recipe && <div><label>On Recipe </label><input type="checkbox"
                                                                                         onChange={handleChange(item.id, 'onRecipe', "checked")}
                                                                                         value={item.onRecipe}/>
                                    </div>}
                                </div>
                                <div className="col-4 col-sm-4 col-md-4">
                                    <input type="number" onChange={handleChange(item.id, 'quantity', "value")}
                                           value={item.quantity} min="1" max={item.stock}
                                           className="input-group input-group-sm"/>
                                </div>
                                <div className="col-2 col-sm-2 col-md-2">
                                    <button type="button" className="btn btn-outline-danger btn-xs"
                                            onClick={() => removeFromList(item.id)}>

                                        <FontAwesomeIcon icon={faTrash}/>

                                    </button>
                                </div>

                                <hr/>
                            </div>

                        </div>
                        <hr/>
                    </div>
                ) : <div>There are no articles </div>}


            </div>

            <div className="card-footer">
                <div className=" float-right">
                    <div className="d-inline-block mr-lg-4">
                        Total price: <b>{totalPrice}€</b>
                    </div>

                    <button onClick={BuyItems} className="btn btn-success text-light ">
                        Reserve Now
                    </button>

                </div>
            </div>
        </div>
    )
}

export default withToastManager(CartPage);