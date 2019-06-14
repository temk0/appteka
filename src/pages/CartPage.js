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

    return (
        <div>
            <div className="card">
                <div className="card-header bg-dark text-light">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    Shipping cart
                    <a href="" className="btn btn-outline-info btn-sm pull-right">Continiue shopping</a>
                    <div className="clearfix"></div>
                </div>
                <div className="card-body">

                    {items.length > 0 ? items.map((item, key) =>
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
                                <div className="col-2 col-sm-2 col-md-2 text-right">
                                    <button type="button" className="btn btn-outline-danger btn-xs"
                                            onClick={() => removeFromList(item.id)}>
                                        {/*<i className="fa fa-trash" aria-hidden="true"></i>*/}
                                        Delete from Cart
                                    </button>
                                </div>
                            </div>
                        </div>) : <div>There are no articles </div>}

                    <hr/>
                    <div className="pull-right">
                        <button onClick={BuyItems} className="btn btn-outline-secondary pull-right">
                            Reserve Now
                        </button>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
                        <div className="row">
                            <div className="col-6">
                                <input type="text" className="form-control" placeholder="cupone code"/>
                            </div>
                            <div className="col-6">
                                <input type="submit" className="btn btn-default" value="Use cupone"/>
                            </div>
                        </div>
                    </div>
                    <div className="pull-right">
                        <a href="" className="btn btn-success pull-right">Checkout</a>
                        <div className="pull-right">
                            Total price: <b>50.00€</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage;