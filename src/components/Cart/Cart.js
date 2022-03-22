import React from 'react';
import './Cart.css';

const Cart = props => {
  const { cart } = props;
  // console.log(cart);
  let total = 0;
  let shipping = 0;
  for (const proudct of cart) {
    total = total + proudct.price;
    shipping = shipping + proudct.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h3>Order Summery</h3>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total: ${grandTotal}</h4>
    </div>
  );
};

export default Cart;
