import React from 'react';
import './Header.css'
import { Link } from "react-router-dom";
const Header = (props) => {
    return (
        <div>


              <div >
              <ul className='d-flex'>
                    <li> 
                    <Link to="/">Shop</Link>
                    </li>
                   
                    <li> 
                    <Link to="/Revew">Revew</Link>
                    </li>
                  
                    <li className='ms-auto'>

                       
                        <Link to="/Revew">
                        <i className="fa-solid fa-cart-plus "> <span>{props.cart.length}</span></i>
                             </Link>
                    </li>
                </ul>
                
              </div>
 
            
            
   

        </div>
    );
};

export default Header;