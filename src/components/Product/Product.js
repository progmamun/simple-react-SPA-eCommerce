import React from 'react';
import './Product.css';

const Product = props => {
  console.log(props);
  const { name, img, seller, price, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Ratings: {ratings} stars</small>
        </p>
        <p>
          <small>Seller: {seller}</small>
        </p>
      </div>
      <button className="btn-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
