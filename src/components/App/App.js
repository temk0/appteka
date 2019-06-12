import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from'../Footer/Footer';
import datatest from '../../datatest'
import {getAllItems} from "../../Services/ItemService";

function App() {

    const [items,setItems] = useState(null);

    useEffect(()=>{
        getAllItems().then(res=> setItems(res));
    }, []);

    console.log("Items are : ", items);


  return (
      <div className="container-fluid bg-light">
        <Header />
        <Main Items={items}  />
        <Footer />
      </div>
  );
}

export default App;
