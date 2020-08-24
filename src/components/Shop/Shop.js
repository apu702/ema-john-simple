import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);

    //Cart value increase part-1
    const [cart, setCart] = useState([])

    //Event handler for button part-3, 4
    const handleAddProduct = (product) =>{
        

        //Cart value increase part-2
        const newCart = [...cart, product];
        setCart(newCart);


    }
    
    return (
        <div className="shop-container">
            
            <div className="product-container">    
                    {
                        products.map(pd => <Product
                                                product={pd}
                                                handleAddProduct = {handleAddProduct}   //Event handler for button part-2
                                                >
                                            </Product>)
                    }
            </div>

            <div className="cart-container">
               <Cart cart= {cart}></Cart>
            </div>
           
        </div>
    );
};

export default Shop;