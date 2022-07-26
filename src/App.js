
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';

import {
  Routes,
  Route,
} from "react-router-dom";
import Revew from './component/Revew/Revew';
import { useState } from 'react';
 
 

 


function App() {

 const [cart,setCart] = useState([])

  const  addtoCart = (item) =>{
      const newCart = [...cart , item];
      setCart(newCart);
  }

 const handleChange = (elm,d) =>{
      const ind = cart.indexOf(elm);
     const arr = cart;
      arr[ind].quantity += d;

       if (arr[ind].quantity === 0) arr[ind].quantity = 1;
      setCart([...arr]);

 
      
 }
  
  
 
   
  return (
    <div>
      <Header cart = {cart}/>
       
        <Routes>
          <Route path="/" element={<Shop addtoCart={addtoCart} />} />
          <Route path="/Revew" element={<Revew cart = {cart} handleChange = {handleChange} setCart = {setCart}/>} />
        </Routes>
    
    </div>
  );
}

export default App;
