import React from 'react';
import ProductSection from './ProductSection';

const ProductsList = ({ products, addToCart, quantity, setQuantity }) => {
  const productsByModel = products.reduce((acc, product) => {
    acc[product.model] = [...(acc[product.model] || []), product];
    return acc;
  }, {});

  return (
    <>
      {Object.entries(productsByModel).map(([model, modelProducts]) => (
        <ProductSection
          key={model}
          model={model}
          products={modelProducts}
          addToCart={addToCart}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      ))}
    </>
  );
};

export default ProductsList;