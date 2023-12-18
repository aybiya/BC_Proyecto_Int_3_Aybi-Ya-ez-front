import React, { useState } from 'react';
import { FaCartPlus } from "react-icons/fa";

const ProductCard = ({ product, addToCart }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleAddToCart = () => {
    const newSelectedQuantity = selectedQuantity + 1; 
  
    addToCart({ product, selectedQuantity: newSelectedQuantity });
    setSelectedQuantity(newSelectedQuantity); 
  };

  const handleQuantityChange = (event) => {
    const quantity = parseInt(event.target.value, 10);
    setSelectedQuantity(quantity);
  };

  return (
    <article className='product-card'>
      <picture className="images-card">
        <img src={product.image} alt={product.model} />
      </picture>
      <p className='size'>{product.size}</p>
      <p className='size'>{product._id}</p>
      <h3>{product.model}</h3>
      <p>{product.description}</p>
      <p className='price'>${product.price}</p>
      <div className='addCart-btn'>
        <button onClick={handleAddToCart}>
          <FaCartPlus /> Agregar al carrito
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
