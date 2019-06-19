import React, {useState} from "react";
import {addItem} from "../Services/ItemService";
import {navigate} from "@reach/router";
import {withToastManager} from "react-toast-notifications";


function AddItem(props) {

    const {toastManager} = props;
    const [item, setItem] = useState({
        name: '',
        description: '',
        imageUrl: '',
        price: null,
        recipePrice: null,
        stock: 1,
        recipe: false
    });


    const handleChange = (entity, target) => event => {
        setItem({...item, [entity]: event.target[target]});
    };

    const handleSubmit = event => {
        event.preventDefault();
        addItem(item).then(res => {
            navigate("/");
            toastManager.add("Successfully created Item",{appearance:"success", autoDismiss:true});

            setInterval(function () {
                window.location.reload();
            },2000)

        })
            .catch(err => {
                toastManager.add("Something went wrong",{appearance:"error", autoDismiss:true});
            })

    };

    return (
        <div className="ml-lg-5">
            <h1 className="title">Add Item</h1>
            <form className="align-content-center" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Name</label>
                            <input onChange={handleChange('name', 'value')} type="text" className="form-control"
                                   placeholder="Enter name"/>
                            <small className="form-text text-muted">Add unique name for the drug.
                            </small>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Description</label>
                            <input onChange={handleChange('description', 'value')} type="text" className="form-control"
                                   placeholder="Description"/>
                            <small className="form-text text-muted">Say something for the item.
                            </small>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Url</label>
                            <input onChange={handleChange('imageUrl', 'value')} type="text" className="form-control"
                                   placeholder="Image Url"/>
                            <input type="file"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Stock</label>
                            <input onChange={handleChange('stock', 'value')} type="number" className="form-control"
                                   placeholder="On Stock"/>
                            <small className="form-text text-muted">Add how many items are on stock.
                            </small>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Price</label>
                            <input onChange={handleChange('price', 'value')} type="number" className="form-control"
                                   placeholder="Regular Price"/>
                            <small className="form-text text-muted">Add Price for the article.
                            </small>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Recipe Price</label>
                            <input onChange={handleChange('recipePrice', 'value')} type="number"
                                   className="form-control"
                                   placeholder="Recipe Price"/>
                            <small className="form-text text-muted">Add Recipe Price for the article.
                            </small>
                        </div>
                        <div className="form-check">
                            <input onChange={handleChange('recipe', 'checked')} type="checkbox"
                                   className="form-check-input"/>
                            <label className="form-check-label">On Recipe</label>
                        </div>

                    </div>
                    <div className="col-lg-6 text-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default withToastManager(AddItem)