import React, { useEffect, useState }  from 'react';
import Revewitem from '../Revewitem/Revewitem';
 
const Revew = (props) => {
    const {cart,handleChange,setCart} = props;
    const [prices, setPrice] = useState(0);
 
    const handleRemove = (id) => {
      const arr = cart.filter((item) => item.id !== id);
      setCart(arr);
      //handlePrice();
    };
    
    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.quantity  * item.price));
        setPrice(ans);
      };
    
      useEffect(() => {
        handlePrice();
      });

    return (
        <div>
           {
            cart.map(elm => <Revewitem key={elm.id} elm={elm} handleChange = { handleChange} handleRemove = {handleRemove}  prices = { prices} />)
           }
        </div>
    );
};

export default Revew;