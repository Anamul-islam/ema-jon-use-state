import React from 'react';
import './Revewitem.css'
const Revewitem = (props) => {
  const {elm,handleChange,handleRemove, prices} = props
    const {price,title,description,img,quantity,id}= elm;
    return (
        <div>
           <div className="items-info">
        <div className="product-img ms-4">
          <img src={img} alt="tp" />
        </div>

        <div className="title ms-5">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity ms-5">
          <i className="fas fa-minus minus" onClick={() =>  handleChange( elm ,-1)} ></i>
          <input type="text" placeholder={quantity} disabled />
          <i className="fas fa-plus add" onClick={() => handleChange( elm ,1)}></i>
        </div>
        <div className="price ms-5">
          <h3>${price}</h3>
        </div>
        <div className="remove-item ms-5">
          <i className="fas fa-trash-alt remove " onClick={()=>handleRemove(id)}></i>
        </div>
       
      </div>
      
      <hr />
      <h2>Total Price   $ {prices}</h2>
        </div>
    );
};

export default Revewitem;