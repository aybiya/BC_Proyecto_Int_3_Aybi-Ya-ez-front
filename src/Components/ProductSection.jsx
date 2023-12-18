import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import ProductCard from './ProductCard';

const ProductSection = ({ model, products, addProduct }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    // Ejecutar la función de addToCart pasada como prop
    addToCart(product);
  };
  
  // Manejar el estado de la cantidad seleccionada para cada producto
  const [quantityMap, setQuantityMap] = useState({});

  // Función para actualizar la cantidad seleccionada de un producto
  const updateQuantity = (productId, newQuantity) => {
    setQuantityMap((prevQuantityMap) => ({
      ...prevQuantityMap,
      [productId]: newQuantity,
    }));
  };
  return (
    <section>
      <h2>{model}</h2>
      <section className="cards-container">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            addToCart={() => addToCart(product, quantityMap[product._id] || 1)}
            quantity={quantityMap[product._id] || 1}
            updateQuantity={(newQuantity) => updateQuantity(product._id, newQuantity)}
          />
        ))}
      </section>
    </section>
  );
};

export default ProductSection;