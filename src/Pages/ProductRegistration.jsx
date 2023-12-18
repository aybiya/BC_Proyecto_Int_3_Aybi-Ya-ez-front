import React, { useState } from 'react';
import ProductForm from '../Components/ProductForm';

const ProductRegistration = () => {
  const [products, setProducts] = useState([]);

  // Función para agregar un producto a la lista
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };



  return (
    <>
      <h1>Alta de Producto</h1>
      <ProductForm addProduct={handleAddProduct} />
    </>
  );
};

export default ProductRegistration;