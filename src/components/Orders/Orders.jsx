import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart();
  return (
    <div>
      <h2>This is Orders</h2>
    </div>
  );
};

export default Orders;
