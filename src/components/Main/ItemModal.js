import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal'
import {deleteItem, editItem} from "../../Services/ItemService";
import {withToastManager} from "react-toast-notifications";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleLeft, faEdit} from "@fortawesome/free-solid-svg-icons";


function ItemModal(props) {


    const {toastManager} = props;
    const [show, setShow] = useState(false);

    const [item, setItem] = useState(null);
    const [itemName, setItemName] = useState(null);
    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
        setItem(props.Item);
        setItemName(props.Item.name);
    };


    const handleChange = (entity, target) => event => {
        setItem({...item, [entity]: event.target[target]});
    };

    const handleSubmit = event => {
        event.preventDefault();
        editItem(item)
            .then(res => {
                handleClose();
                toastManager.add("Item was successfully edited", {appearance: "success", autoDismiss: true});

                setInterval(function () {
                    window.location.reload();
                }, 2000)

            })
            .catch(err => {
                toastManager.add("Something went wrong", {appearance: "error", autoDismiss: true});
            });
    };

    const handleDelete = id => {
        deleteItem(id).then(res=>{
            handleClose();
            toastManager.add(`Item with id: ${id} was deleted`, {appearance: "error", autoDismiss: true});

            setInterval(function () {
                window.location.reload();
            }, 2000)
        });
    };


    return (
        <>
            <button className="btn btn-primary" onClick={handleShow}>
                Edit <FontAwesomeIcon icon={faEdit}/>
            </button>

            {item && <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{itemName && <span>{itemName}</span>}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <label>Name</label>
                        <input onChange={handleChange('name', 'value')} type="text" value={item.name}
                               className="form-control"
                               placeholder="Enter name"/>
                        <small className="form-text text-muted">Add unique name for the drug.
                        </small>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea rows={4} value={item.description}  onChange={handleChange('description', 'value')} type="text" className="form-control"
                                  placeholder="Some text here..."/>
                        <small className="form-text text-muted">Say something for the item.
                        </small>
                    </div>

                    <div className="form-group">
                        <label>Stock</label>
                        <input onChange={handleChange('stock', 'value')} value={item.stock} type="number" className="form-control"
                               placeholder="On Stock"/>
                        <small className="form-text text-muted">Add how many items are on stock.
                        </small>
                    </div>

                    <div className="form-group">
                        <label>Price</label>
                        <input value={item.price} onChange={handleChange('price', 'value')} type="number" className="form-control"
                               placeholder="Regular Price"/>
                        <small className="form-text text-muted">Add Price for the article.
                        </small>
                    </div>
                    <div className="form-group">
                        <label>Recipe Price</label>
                        <input value={item.recipePrice} onChange={handleChange('recipePrice', 'value')} type="number"
                               className="form-control"
                               placeholder="Recipe Price"/>
                        <small className="form-text text-muted">Add Recipe Price for the article.
                        </small>
                    </div>

                    <div className="form-check">
                        <label className="form-check-label">
                            <input checked={item.recipe} onChange={handleChange('recipe', 'checked')} type="checkbox"
                                   className="form-check-input"/>
                            On Recipe</label>
                    </div>


                </Modal.Body>
                <hr className="h"/>
                <Modal.Footer style={{display:"flex", justifyContent:"flex-start"}}>
                    <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                    <div style={{display:"flex", justifyContent:"flex-end", width:"100%"}}>
                        <button className="btn btn-link" style={{fontSize:20, color:"black"}} onClick={handleClose}>
                            <FontAwesomeIcon icon={faArrowCircleLeft}/>
                        </button>
                        <button className="btn btn-success" onClick={handleSubmit}>
                            Save Changes
                        </button>
                    </div>

                </Modal.Footer>
            </Modal>}
        </>
    );
}

export default withToastManager(ItemModal)