import React, {useState, useEffect} from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import {getAllItems, searchItems} from "../../Services/ItemService";
import {LocationProvider, Router} from "@reach/router";
import CartPage from "../../pages/CartPage";
import SideBar from "../Main/SideBar";
import AddItem from "../../pages/AddItem";
import TicketPage from "../../pages/OrderPage";
import {ToastProvider} from 'react-toast-notifications';
import Register from "../../pages/Register";

function App() {

    const [items, setItems] = useState(null);

    const [cartItems, setCartItems] = useState(new Set());

    const addToCart = (item) => {
        const nova = new Set(cartItems);
        nova.add(item);
        setCartItems(nova);
    };

    const deleteFromCart = id => {
        const nova = new Set(cartItems);

        nova.forEach(item => {
            if (id === item.id) {
                nova.delete(item);
            }
        });
        setCartItems(nova);
    };

    const search = search => {
        searchItems(search).then(res => setItems(res));
    };

    useEffect(() => {
        getAllItems().then(res => setItems(res));
    }, []);

    return (
        <div className="container-fluid bg-light">
            <Header search={search} cartItems={cartItems}/>
            <div className="row">
                <div className="col-lg-2">
                    <SideBar/>
                </div>
                <div className="col-lg-10">
                    <div className="container">
                        <LocationProvider>
                            <ToastProvider>
                                <Router>
                                    <Main Items={items} itemsInCart={addToCart} path="/"/>
                                    <CartPage cartItems={cartItems} deleteFromCart={deleteFromCart} path="/cart"/>
                                    <AddItem path="/add-item"/>
                                    <Register path="/register"/>
                                    <TicketPage path="/ticket-page"/>
                                    <TicketPage path="/ticket-page/:orderId"/>
                                </Router>
                            </ToastProvider>
                        </LocationProvider>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
