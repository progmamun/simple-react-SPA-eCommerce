import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart();

  const handleRemoveProduct = product => {
    const rest = cart.filter(pd => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  return (
    <div>
      <div className="shop-container">
        <div className="products-container">
          {cart.map(product => (
            <ReviewItem
              key={product.id}
              product={product}
              handleRemoveProduct={handleRemoveProduct}
            ></ReviewItem>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <Link>
              <button>Proceed Checkout</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
