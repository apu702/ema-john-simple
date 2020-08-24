import React from 'react';

const Cart = (props) => {
    //Cart value increase part-2
    const cart = props.cart;

    //Cart price increase part-1
      //const totalPrice = cart.reduce((total, prd) => total + prd.price, 0); 

                       // OR //

      let  total = 0;
      for(let i = 0; i< cart.length; i++){
          const product = cart[i];
          total = total + product.price;
      }

      //Shipping part-1
      let shipping = 0;
            if(total > 35){
                shipping = 0;
            }

            else if(total > 15){
                shipping = 4.99;
            } 

            else if(total > 0){
                shipping = 12.99;
            }
     //Tax part
     const tax =Math.round(total / 10).toFixed(2);
     const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Order:{cart.length}</p>  
            <p>Product Price: {total} </p>
            <p><small>Tax + Vat: {tax}</small></p>
            <p><small>Shipping Cost:{shipping}</small></p> 
            <p>Total Price:{grandTotal}</p> 
        </div>
    );
};

export default Cart;