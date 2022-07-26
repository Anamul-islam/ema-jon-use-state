import React, { useState } from 'react';
import Product from '../Product/Product';
 import products from '../../products'
 
const Shop = (props) => {

const[ item ]= useState(products)
 

    return (
        <div>
            {
                item.map(item => <Product key={item.id} item = {item} addtoCart={props.addtoCart}/>)
            }
             
        </div>
    );
};

export default Shop;