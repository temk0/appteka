import React, {useState, useEffect} from 'react';
import './cartPage.css';
import {createOrder} from "../Services/OrderService";

function CartPage(props) {


    const [items, setItems] = useState([]);


    useEffect(() => {
        const nova = [...props.cartItems].map(item => ({...item, quantity: 1, onRecipe: false}));
        setItems(nova)
    }, []);

    console.log("items are: ", items);
    const removeFromList = id => {
        props.deleteFromCart(id);
        let newList = [...items];
        newList = newList.filter(item =>
            item.id !== id
        );
        setItems(newList);
    };

    const BuyItems = () => {
        const Request = {
            items: items.map(item => {
                return {itemId: item.id, quantity: item.quantity, onRecipe: item.onRecipe};
            })
        };
        createOrder(Request)
    };

    const handleChange = (id, name, target) => event => {
        const newItems = items.map(item => {
            if (item.id === id) {
                return {...item, [name]: event.currentTarget[target]}
            } else
                return item;
        });
        setItems(newItems);
    };

    const TotalCost = () => {



    };


    return (
        <div className="container d-inline-block mb-lg-4 mt-lg-4 col-lg-10">
            <div className="card">
                <div className="card-header bg-info text-light">
                    {/*<i className="fa fa-shopping-cart" aria-hidden="true"></i>*/}
                    <b>Your Cart</b>
                </div>
                <div className="card-body">

                    {items.length > 0 ? items.map((item, key) =>
                       <div className="">
                            <div className="row" key={key}>
                                <div className="col-12 col-sm-12 col-md-2 text-center">
                                    <img className="img-responsive" src="http://placehold.it/120x80" alt="prewiew"
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
                                        <h6><strong>{item.onRecipe ? item.recipePrice : item.price} <span
                                            className="text-muted">{item.onRecipe ? "Recipe Price" : "Regular Price"}</span></strong>
                                        </h6>
                                        {item.recipe && <div><label>On Recipe </label><input type="checkbox"
                                                                                              onChange={handleChange(item.id, 'onRecipe', "checked")}
                                                                                              value={item.onRecipe}/></div>}
                                    </div>
                                    <div className="col-4 col-sm-4 col-md-4">
                                        <input type="number" onChange={handleChange(item.id, 'quantity', "value")}
                                               value={item.quantity} min="1" max={item.stock}
                                               className="input-group input-group-sm"/>
                                    </div>
                                    <div className="col-2 col-sm-2 col-md-2">
                                        <button type="button" className="btn btn-outline-danger btn-xs"
                                                onClick={() => removeFromList(item.id)}>
                                            {/*<i className="fa fa-trash" aria-hidden="true"></i>*/}
                                            Delete
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
                            Total price: <b>{TotalCost}€</b>
                        </div>
                        <button onClick={BuyItems} className="btn btn-success text-light ">
                            Reserve Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage;