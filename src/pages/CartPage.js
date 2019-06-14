import React from 'react';
import './cartPage.css';

function cartPage(props) {

    const items = [...props.cartItems];

    console.log("items are: ", items.length);
    //
    const removeFromList = (list,id) => {
        list.splice(id,1);

        console.log("New List after splice: ", list);
    };

    return (
        <div className="container">
            <div className="card">
                <div className="card-header bg-dark text-light">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    Shipping cart
                    <a href="" className="btn btn-outline-info btn-sm pull-right">Continiu shopping</a>
                    <div className="clearfix"></div>
                </div>
                <div className="card-body">

                    { items.length > 0 ? items.map((item,key) =>
                        <div className="row" >
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
                                <h6><strong>{item.price} <span className="text-muted">Regular Price</span></strong></h6>
                                <h6><strong>{item.recipePrice} <span className="text-muted">Recipe Price</span></strong></h6>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4">
                                <div className="quantity">
                                    <input type="button" value="+" className="plus"/>
                                    <input type="number" step="1" max="99" min="1" value="1" title="Qty"
                                           className="qty"
                                           size="4"/>
                                    <input type="button" value="-" className="minus"/>
                                </div>
                            </div>
                            <div className="col-2 col-sm-2 col-md-2 text-right">
                                <button type="button" className="btn btn-outline-danger btn-xs" onClick={removeFromList(items,item.id)} >
                                    {/*<i className="fa fa-trash" aria-hidden="true"></i>*/}
                                    Delete from Cart
                                </button>
                            </div>
                        </div>
                    </div>) : <div>There are no articles </div>  }

                    <hr/>
                    <div className="pull-right">
                        <a href="" className="btn btn-outline-secondary pull-right">
                            Update shopping cart
                        </a>
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

export default cartPage;