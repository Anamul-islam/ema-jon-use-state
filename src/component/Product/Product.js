import React from 'react';
import './Product.css'
const Product = (props) => {
    const {addtoCart,item} = props
    const {img,description,price,title} =  item;

    return (
        <div>
             <div >
                <img src={img} alt="" className='imgss'/>
             </div>
             <div className='pro'>
                <h3>{description}</h3>
                <h4>{title}</h4>
                <p>${price}</p>
                <br />
                <button onClick={()=>addtoCart(item)}>add to cart</button>
             </div>
        </div>
    );
};

export default Product;