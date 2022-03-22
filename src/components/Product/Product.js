import React from 'react';
import './Product.css';

const Product = props => {
  console.log(props);
  const { name, img, seller, price, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
    </div>
  );
};

export default Product;
