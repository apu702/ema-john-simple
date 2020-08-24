import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;

    return (
        <div className="product">
            <div>
                 <img src={img} alt=""/>
            </div>
            <div >
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p>Only {stock} left in stock</p>
                <button
                   className="cart-btn"
                   onClick={()=> props.handleAddProduct(props.product)}  //Event handler for button part-1, 4
                   >
                       <FontAwesomeIcon icon={faShoppingCart}/>  Add to cart</button>
            </div>

        </div>
    );
};

export default Product;